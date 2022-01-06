import ExampleIOUPaymentForm from "../components/ExampleIOUPaymentForm";
import EpayPaymentForm from "../components/EpayPaymentForm";

const cashIcon = "https://firebasestorage.googleapis.com/v0/b/twowheelstogo-572d7.appspot.com/o/resources%2Fpath824.png?alt=media&token=50596dd1-7019-4622-a279-023ff22dc346";
//const epayIcon = "https://firebasestorage.googleapis.com/v0/b/twg-vehicle-dashboard.appspot.com/o/Iconos%2Fimageonline-co-transparentimage.png?alt=media&token=476244b3-1a99-4c8f-9ed1-ee12efe4fc22";
const epayIcon = "https://firebasestorage.googleapis.com/v0/b/twowheelstogo-572d7.appspot.com/o/resources%2Fg3420.png?alt=media&token=d3858828-aa4b-4abe-b0e1-45efcbb91924";
const paymentMethods = [	
	{
		displayName: "Efectivo",
		InputComponent: ExampleIOUPaymentForm,		
		name: "stripe_payment_intent",
		shouldCollectBillingAddress: true,
		icon: cashIcon
	},
	{
		displayName: "Tarjeta",
		InputComponent: EpayPaymentForm,
		name: "iou_example",
		shouldCollectBillingAddress: true,
		icon: epayIcon
	}
];

export default paymentMethods;