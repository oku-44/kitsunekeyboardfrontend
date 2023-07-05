import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import React from 'react'
const Law = () => {
	return (
		<div className="bg-white px-6 py-32 lg:px-8">
			<div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
				<h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">特定商取引法に基づく表記</h1>
				<table className="table-fixed">
					<tbody>
						<tr>
							<td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>法人名</td>
							<td className='border-b border-slate-100 dark:border-slate-700 py-4 px-8 text-slate-500 dark:text-slate-400'>きつねキーボード</td>
						</tr>
						<tr>
							<td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>所在地</td>
							<td className='border-b border-slate-100 dark:border-slate-700 py-4 px-8 text-slate-500 dark:text-slate-400'>〒104-0033 東京都中央区新川2丁目18番4号</td>
						</tr>
						<tr>
							<td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>電話番号</td>
							<td className='border-b border-slate-100 dark:border-slate-700 py-4 px-8 text-slate-500 dark:text-slate-400'>070-8464-0727</td>
						</tr>
						<tr>
							<td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>メールアドレス</td>
							<td className='border-b border-slate-100 dark:border-slate-700 py-4 px-8 text-slate-500 dark:text-slate-400'>1004oku1004@gmail.com</td>
						</tr>
						<tr>
							<td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>運営統括責任者</td>
							<td className='border-b border-slate-100 dark:border-slate-700 py-4 px-8 text-slate-500 dark:text-slate-400'>奥諒太郎</td>
						</tr>
						<tr>
							<td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>追加手数料等の追加料金</td>
							<td className='border-b border-slate-100 dark:border-slate-700 py-4 px-8 text-slate-500 dark:text-slate-400'>配送料（一律500円 商品代金に含む）</td>
						</tr>
						<tr>
							<td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>交換および返品（返金ポリシー）</td>
							<td className='border-b border-slate-100 dark:border-slate-700 py-4 px-8 text-slate-500 dark:text-slate-400'>＜お客様都合の返品・交換の場合＞<br />
								未開封の商品は、商品到着後 10 日以内に記載のメールアドレスにご連絡いただいた場合に限り、お客様の送料負担にて返金又は同額以下の商品と交換いたします。開封後の商品は、返品・交換はお受けしておりません。
								<br />
								＜商品に不備がある場合＞<br />
								当社の送料負担にて返金又は新しい商品と交換いたします。記載のメールアドレスにご連絡ください。</td>
						</tr>
						<tr>
							<td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>引渡時期</td>
							<td className='border-b border-slate-100 dark:border-slate-700 py-4 px-8 text-slate-500 dark:text-slate-400'>注文は注文完了時に処理され、通常商品は3日以内に発送します。<br />
							ただし、在庫が不足している場合は到着まで1ヶ月以上かかる場合があります。</td>
						</tr>
						<tr>
							<td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>受け付け可能な決済手段</td>
							<td className='border-b border-slate-100 dark:border-slate-700 py-4 px-8 text-slate-500 dark:text-slate-400'>クレジットカード決済</td>
						</tr>
						<tr>
							<td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>決済期間</td>
							<td className='border-b border-slate-100 dark:border-slate-700 py-4 px-8 text-slate-500 dark:text-slate-400'>注文完了次第決済処理が実行されます</td>
						</tr>
						<tr>
							<td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>販売価格</td>
							<td className='border-b border-slate-100 dark:border-slate-700 py-4 px-8 text-slate-500 dark:text-slate-400'>各商品ページに記載の金額</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
export default Law
