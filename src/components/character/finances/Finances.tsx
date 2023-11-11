import React from 'react'
import { useForm } from 'react-hook-form'
import HInput from '../../BaseComponents/Form/HInput'

type FinanceDetailsNames =
	| 'monthlyShipPayments'
	| 'pension'
	| 'cashOnHand'
	| 'debt'
	| 'livingCosts'

type FormData = {
	[K in FinanceDetailsNames]: string
}

const Finances: React.FC = () => {
	const { register } = useForm<FormData>()

	return (
		<div className='flex flex-col space-y-1'>
			<HInput
				className='w-60'
				type='text'
				label='Monthly Ship Payments'
				{...register('monthlyShipPayments')}
			/>
			<HInput
				className='w-60'
				type='text'
				label='Pension'
				{...register('pension')}
			/>
			<HInput
				className='w-60'
				type='text'
				label='Cash on Hand'
				{...register('cashOnHand')}
			/>
			<HInput className='w-60' type='text' label='Debt' {...register('debt')} />
			<HInput
				className='w-60'
				type='text'
				label='Living Costs'
				{...register('livingCosts')}
			/>
		</div>
	)
}

export default Finances
