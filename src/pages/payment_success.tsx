import TrendingItems from '../../components/TrendingItems';
import { fetchAPI } from "../../lib/api";
const PaymentSuccess = ({products}:any) => {
  return (
    <>
      <div className="mx-auto my-8 px-2 text-gray-500 text-center">
		<h1 className="text-4xl">ご購入ありがとうございます</h1>
        <div className="mx-auto my-12 max-w-3s sm:w-2/3">
			注文は注文完了時に処理されました。<br/>
			通常商品は3日以内に発送します。<br />
			<br />
			ご到着までしばらくお待ちください
        </div>
      </div>
	  <TrendingItems products={products} />
    </>
  );
};
export async function getStaticProps() {
	// Run API calls in parallel
	const [productRes] = await Promise.all([
		fetchAPI("/products", { populate: "*" })
	]);

	return {
		props: {
			products: productRes.data
		},
		revalidate: 1,
	};
}
export default PaymentSuccess;
