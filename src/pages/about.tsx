import React from 'react'
import Image from 'next/image'
import { NextPage } from 'next'

const About: NextPage = () => {
	return (

		<div className="bg-gray-800 text-center">
			<div>
			</div>
			<div className="relative bg-gray-900">
				{/* Decorative image and overlay */}
				<div aria-hidden="true" className="absolute inset-0">
					<Image
						src="workshop.jpeg"
						alt=""
						className="h-full w-full object-cover"
					/>
				</div>
				<div aria-hidden="true" className="absolute inset-0 w-full md:w-4/5 h-100 mx-auto bg-gray-900 opacity-70" />
				<div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-2 pb-10 mb-40 text-center lg:px-0">
					<h1 className="text-4xl  font-bold tracking-tight text-amber-500 lg:text-4xl">About</h1>
					<p className="mt-8 text-lg text-white text-left md:w-4/5">
						ある日のある場所に深い森がありました。<br />
						偶然にも私は、そこでキツネに出会いました。<br />
						<br />
						<br />
						キツネと仲良くなった私は、家に招待され、そこで様々な奇妙な品物に囲まれた中から、古いキーボードをプレゼントされました。<br />
						このキーボードは通常のものよりも遥かに高速で、スムーズに打つことができました。<br />
						<br />
						<br />
						その後、キツネに感謝の気持ちを伝えると、キツネは<br />
						「このキーボードは私が作ったもので、毎日工房で新しい作品を作っているんだ。工房は一度行けば、忘れられないほど美しく、神秘的な場所だよ。」<br />
						と教えてくれました。
						<br />
						<br />
						私はキツネにその工房に案内してもらえないかと頼みました。<br />
						キツネは喜んで案内してくれ、美しいネオンブルーが輝く工房で様々なキーボードを見せてもらいました。<br />
						その中には、今まで見たことのないほど美しく、高機能なキーボードもありました。
						<br />
						<br />
						私はキーボードに魅了され、キツネに「このキーボードはなぜ売っていないのか」と尋ねました。<br />
						<br />
						キツネは、私に笑顔で応え、<br />
						「ぼくは作るだけさ。でも、あなたが世界中に広めてくれたら、私のキーボードが多くの人々に使われるようになって嬉しいだろうね」と言いました。<br />
						<br />
						<br />
						こうして、今日もキツネの作ったキーボードは世界中に広がり、<br />
						多くの人々を魅了しています。
					</p>

				</div>
			</div>
		</div>
	)
}

export default About