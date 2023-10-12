import { $createCodeNode } from '@lexical/code'
import {
	INSERT_ORDERED_LIST_COMMAND,
	INSERT_UNORDERED_LIST_COMMAND,
	REMOVE_LIST_COMMAND,
} from '@lexical/list'
import { $createHeadingNode, $createQuoteNode } from '@lexical/rich-text'
import { $wrapNodes } from '@lexical/selection'
import {
	$createParagraphNode,
	$getSelection,
	$isRangeSelection,
	LexicalEditor,
} from 'lexical'
import { FC, MutableRefObject, useEffect, useRef } from 'react'

interface BlockOptionsDropdownListProps {
	editor: LexicalEditor
	blockType: string
	toolbarRef: React.RefObject<HTMLDivElement>
	setShowBlockOptionsDropDown: (show: boolean) => void
}

const BlockOptionsDropdownList: FC<BlockOptionsDropdownListProps> = ({
	editor,
	blockType,
	toolbarRef,
	setShowBlockOptionsDropDown,
}) => {
	const dropDownRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

	useEffect(() => {
		const toolbar = toolbarRef.current
		const dropDown = dropDownRef.current

		if (toolbar !== null && dropDown !== null) {
			const { top, left } = toolbar.getBoundingClientRect()
			dropDown.style.top = `${top + 40}px`
			dropDown.style.left = `${left}px`
		}
	}, [dropDownRef, toolbarRef])

	useEffect(() => {
		const dropDown = dropDownRef.current
		const toolbar = toolbarRef.current

		if (dropDown !== null && toolbar !== null) {
			const handle = (event: { target: any }) => {
				const target = event.target

				if (!dropDown.contains(target) && !toolbar.contains(target)) {
					setShowBlockOptionsDropDown(false)
				}
			}
			document.addEventListener('click', handle)

			return () => {
				document.removeEventListener('click', handle)
			}
		}
	}, [dropDownRef, setShowBlockOptionsDropDown, toolbarRef])

	const formatParagraph = () => {
		if (blockType !== 'paragraph') {
			editor.update(() => {
				const selection = $getSelection()

				if ($isRangeSelection(selection)) {
					$wrapNodes(selection, () => $createParagraphNode())
				}
			})
		}
		setShowBlockOptionsDropDown(false)
	}

	const formatLargeHeading = () => {
		if (blockType !== 'h1') {
			editor.update(() => {
				const selection = $getSelection()

				if ($isRangeSelection(selection)) {
					$wrapNodes(selection, () => $createHeadingNode('h1'))
				}
			})
		}
		setShowBlockOptionsDropDown(false)
	}

	const formatMediumHeading = () => {
		if (blockType !== 'h2') {
			editor.update(() => {
				const selection = $getSelection()

				if ($isRangeSelection(selection)) {
					$wrapNodes(selection, () => $createHeadingNode('h2'))
				}
			})
		}
		setShowBlockOptionsDropDown(false)
	}

	const formatSmallHeading = () => {
		if (blockType !== 'h3') {
			editor.update(() => {
				const selection = $getSelection()

				if ($isRangeSelection(selection)) {
					$wrapNodes(selection, () => $createHeadingNode('h3'))
				}
			})
		}
		setShowBlockOptionsDropDown(false)
	}

	const formatBulletList = () => {
		if (blockType !== 'ul') {
			editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, void 0)
		} else {
			editor.dispatchCommand(REMOVE_LIST_COMMAND, void 0)
		}
		setShowBlockOptionsDropDown(false)
	}

	const formatNumberedList = () => {
		if (blockType !== 'ol') {
			editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, void 0)
		} else {
			editor.dispatchCommand(REMOVE_LIST_COMMAND, void 0)
		}
		setShowBlockOptionsDropDown(false)
	}

	const formatQuote = () => {
		if (blockType !== 'quote') {
			editor.update(() => {
				const selection = $getSelection()

				if ($isRangeSelection(selection)) {
					$wrapNodes(selection, () => $createQuoteNode())
				}
			})
		}
		setShowBlockOptionsDropDown(false)
	}

	const formatCode = () => {
		if (blockType !== 'code') {
			editor.update(() => {
				const selection = $getSelection()

				if ($isRangeSelection(selection)) {
					$wrapNodes(selection, () => $createCodeNode())
				}
			})
		}
		setShowBlockOptionsDropDown(false)
	}

	return (
		<div
			className='absolute flex flex-col bg-gray-700 p-4 text-left text-white'
			ref={dropDownRef}
		>
			<button className='item' onClick={formatParagraph}>
				<span className='text'>Normal</span>
				{blockType === 'paragraph' && <span className='active' />}
			</button>
			<button className='item' onClick={formatLargeHeading}>
				<span className='text'>Large Heading</span>
				{blockType === 'h1' && <span className='active' />}
			</button>
			<button className='item' onClick={formatMediumHeading}>
				<span className='text'>Medium Heading</span>
				{blockType === 'h2' && <span className='active' />}
			</button>
			<button className='item' onClick={formatSmallHeading}>
				<span className='text'>Small Heading</span>
				{blockType === 'h3' && <span className='active' />}
			</button>
			<button className='item' onClick={formatBulletList}>
				<span className='text'>Bullet List</span>
				{blockType === 'ul' && <span className='active' />}
			</button>
			<button className='item' onClick={formatNumberedList}>
				<span className='text'>Numbered List</span>
				{blockType === 'ol' && <span className='active' />}
			</button>
			<button className='item' onClick={formatQuote}>
				<span className='text'>Quote</span>
				{blockType === 'quote' && <span className='active' />}
			</button>
			<button className='item' onClick={formatCode}>
				<span className='text'>Code Block</span>
				{blockType === 'code' && <span className='active' />}
			</button>
		</div>
	)
}

export default BlockOptionsDropdownList
