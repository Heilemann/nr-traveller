import React from 'react'
import { useForm } from 'react-hook-form'
import HInput from '../../BaseComponents/Form/HInput'
import Heading from '../../BaseComponents/Heading'

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
		<div>
			<Heading>Finances</Heading>
			<div className='grid grid-cols-1 gap-x-4 sm:grid-cols-2 lg:grid-cols-3'>
				<HInput
					type='text'
					label='Monthly Ship Payments'
					{...register('monthlyShipPayments')}
				/>
				<HInput type='text' label='Pension' {...register('pension')} />
				<HInput type='text' label='Cash on Hand' {...register('cashOnHand')} />
				<HInput type='text' label='Debt' {...register('debt')} />
				<HInput type='text' label='Living Costs' {...register('livingCosts')} />
			</div>
		</div>
	)
}

export default Finances
