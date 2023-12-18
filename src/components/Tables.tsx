import DecoBox from './DecoBox'
import TD from './TD'

export default function Tables() {
	return (
		<DecoBox className='grid grid-cols-4 gap-4'>
			<table className='border border-yellow-400/60 text-center'>
				<thead>
					<tr>
						<td className='text-2xl' colSpan={4}>
							Sanity
						</td>
					</tr>
				</thead>
				<tr className='border-t border-yellow-400/60'>
					<TD>0</TD>
					<TD>1</TD>
					<TD>2</TD>
					<TD>3</TD>
				</tr>
				<tr className='border-t border-yellow-400/60'>
					<TD>4</TD>
					<TD>5</TD>
					<TD>6</TD>
					<TD>7</TD>
				</tr>
				<tr className='border-t border-yellow-400/60'>
					<TD>8</TD>
					<TD>9</TD>
					<TD>10</TD>
					<TD>11</TD>
				</tr>
				<tr className='border-t border-yellow-400/60'>
					<TD>12</TD>
					<TD>13</TD>
					<TD>14</TD>
					<TD>15</TD>
				</tr>
			</table>

			<table className='border border-yellow-400/60 text-center'>
				<thead>
					<tr>
						<td className='text-2xl' colSpan={4}>
							Stability
						</td>
					</tr>
				</thead>
				<tr className='border-t border-yellow-400/60'>
					<TD>-12</TD>
					<TD>-11</TD>
					<TD>-10</TD>
					<TD>-9</TD>
				</tr>
				<tr className='border-t border-yellow-400/60'>
					<TD>-8</TD>
					<TD>-7</TD>
					<TD>-6</TD>
					<TD>-5</TD>
				</tr>
				<tr className='border-t border-yellow-400/60'>
					<TD>-4</TD>
					<TD>-3</TD>
					<TD>-2</TD>
					<TD>-1</TD>
				</tr>
				<tr className='border-t border-yellow-400/60'>
					<TD>0</TD>
					<TD>1</TD>
					<TD>2</TD>
					<TD>3</TD>
				</tr>
				<tr className='border-t border-yellow-400/60'>
					<TD>4</TD>
					<TD>5</TD>
					<TD>6</TD>
					<TD>7</TD>
				</tr>
				<tr className='border-t border-yellow-400/60'>
					<TD>8</TD>
					<TD>9</TD>
					<TD>10</TD>
					<TD>11</TD>
				</tr>
				<tr className='border-t border-yellow-400/60'>
					<TD>12</TD>
					<TD>13</TD>
					<TD>14</TD>
					<TD>15</TD>
				</tr>
			</table>
		</DecoBox>
	)
}
