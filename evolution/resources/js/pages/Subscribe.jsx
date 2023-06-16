import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// import "../Subscribe.css"
import { useEffect, useState } from "react";
import logo from "../images/WhiteGreenLogo.png"


import AOS from "aos"



const Subscribe = () => {


    const API = "ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6VXhNaUo5LmV5SnVZVzFsSWpvaWFXNXBkR2xoYkNJc0ltTnNZWE56SWpvaVRXVnlZMmhoYm5RaUxDSndjbTltYVd4bFgzQnJJam96TkRnMU5qaDkuLVEzUFNNZzVQUU8zNHh2UEY4SHRzWjgtMW1vWDV3Y2tIOWJITC0zSGRkWU1HUmxPYU5ONW5oLVlyZHZmQThsa0pfYjJjN0M1bEt1VjlfelhITFJqVkE="

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    const [disease, setDisease] = useState("")


    const [type, setType] = useState("")
    const [bundle, setBundle] = useState("")
    const [payment, setPayment] = useState("")
    const [frame, setFrame] = useState("")
    const [bundles, setBundles] = useState([{
        name: '',
        value: ''
    }])
    const [amount, setAmount] = useState("0")

    const [firstState, setFirstState] = useState(0)
    const [lastState, setLastState] = useState(0)

    const [phoneState, setPhoneState] = useState(0)
    const [bundleState, setBundleState] = useState(0)
    const [typeState, setTypeState] = useState(0)
    const [mailState, setMailState] = useState(0)
    const [paymentState, setPaymentState] = useState(0)

    const [check, setCheck] = useState(1)

    const [scroll, setScroll] = useState(0)

    const types = ['Mixed', 'Ladies'];

    const mixedBundles = [{
        name: '1-Month',
        value: '1199'
    },
    {
        name: '3-Month',
        value: '2699'
    }, {
        name: '6-Month',
        value: '3799'
    },
    {
        name: '1-Year',
        value: '4899'
    },
    {
        name: '1-Year + 2 Months Gold',
        value: '5799'
    },
    {
        name: '1-Year Premium',
        value: '6499'
    }
    ]

    const ladiesBundles = [{
        name: '1-Month',
        value: '699'
    },
    {
        name: '3-Month',
        value: '1649'
    }, {
        name: '6-Month',
        value: '2499'
    },
    {
        name: '1-Year',
        value: '3499'
    },
    ]

    const methods = [{
        name: "Credit/Debit Cards",
        value: 3536460,
        frame: 453247,
        // 
        // 2884378
        // 3502382
    }, {
        name: "valU",
        value: 3543814,
        frame: 742355,

    }]



    useEffect(() => {

        AOS.init();

        if (!scroll) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            setScroll(1)
        }

        if (firstState && lastState && phoneState && typeState && bundleState && paymentState && mailState) {
            setCheck(0)
        } else {
            setCheck(1)
        }




    }, [firstName, lastName, phone, disease, type, check, amount, firstState, lastState, phoneState, typeState, bundleState, paymentState, mailState]);




    const handleClick = (amount, event) => {

        event.preventDefault();
        // console.log(amount)
        // console.log(typeof amount)

        // // let x = Number(amount) + Number(amount) * 0.025;
        // amount = (Number(amount) + Number(amount) * 0.025).toFixed(0).toString()
        // console.log(amount)
        // console.log(typeof amount)
        // setAmount(x.toString())
        // setTotala
        firstStep(amount + '99')


    }



    const onFirstNameChange = (event) => {

        setFirstName(event.target.value);

        if (event.target.value.trim() == "") {
            event.target.classList.remove('success');
            event.target.classList.add('error');
            setFirstState(0)

        } else {
            event.target.classList.add('success');
            event.target.classList.remove('error');
            setFirstState(1)
        }

    }

    const onLastNameChange = (event) => {

        setLastName(event.target.value);


        if (event.target.value.trim() === "" || !isNaN(event.target.value)) {
            event.target.classList.remove('success');
            event.target.classList.add('error');
            setLastState(0)
        } else {
            event.target.classList.add('success');
            event.target.classList.remove('error');
            setLastState(1)

        }


    }


    const onPhoneChange = (event) => {

        setPhone(event.target.value);

        if (event.target.value.trim() === "" || isNaN(event.target.value) || event.target.value.trim().length < 7) {
            event.target.classList.remove('success');
            event.target.classList.add('error');
            setPhoneState(0)
        } else {
            event.target.classList.add('success');
            event.target.classList.remove('error');
            setPhoneState(1)

        }


    }

    const onDiseaseChange = (event) => {

        setDisease(event.target.value);


    }

    const onMailChange = (event) => {

        setMail(event.target.value);


        if (event.target.value.trim() === "") {
            event.target.classList.remove('success');
            event.target.classList.add('error');
            setMailState(0)
        } else {
            event.target.classList.add('success');
            event.target.classList.remove('error');
            setMailState(1)

        }


    }

    const onTypeChange = (e) => {
        setType(e.target.value)
        if (e.target.value === "Mixed") {
            setBundles(mixedBundles)
            setTypeState(1)

        }

        if (e.target.value === "Ladies") {
            setBundles(ladiesBundles)
            setTypeState(1)

        }

        setAmount("0");
        setBundle("")
        setBundleState(0)



    }
    const onBundleChange = (e) => {
        setBundle(e.target.value)
        setAmount(e.target.value)
        setBundleState(1)



    }

    const onPaymentChange = (e) => {
        setPayment(e.target.value)
        if (e.target.value == 3543814) {
            setFrame(742355)
        } else {
            setFrame(453247)
        }
        setPaymentState(1)


    }




    const firstStep = async (amount) => {

        const data = {
            "api_key": API
        };

        const request = await fetch('https://accept.paymob.com/api/auth/tokens', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        const response = await request.json()
        const token = response.token




        secondStep(token, amount)

    };


    const secondStep = async (token, amount) => {

        const data = {

            "auth_token": token,
            "delivery_needed": "false",
            "amount_cents": amount,
            "currency": "EGP",
            "items": [
            ],
            "shipping_data": {

                "email": mail,

                "first_name": firstName,

                "phone_number": phone,

                "extra_description": disease,

                "last_name": lastName,

            },



        };

        const request = await fetch('https://accept.paymob.com/api/ecommerce/orders', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        const response = await request.json()


        const id = response.id;
        thirdStep(token, id, amount)


    };


    const thirdStep = async (tok, id, amount) => {
        // const headers = {
        //     Authorization: authProps.idToken // using Cognito authorizer
        // };
        // const response = await axios.post(
        //     "https://MY_ENDPOINT.execute-api.us-east-1.amazonaws.com/v1/",
        //     API_GATEWAY_POST_PAYLOAD_TEMPLATE,
        //     { headers }
        // );
        const data = {
            "auth_token": tok,
            "amount_cents": amount,
            "expiration": 3600,
            "order_id": id,
            "billing_data": {
                "apartment": "NA",
                "email": mail,
                "floor": "NA",
                "first_name": firstName,
                "street": "NA",
                "building": "NA",
                "phone_number": phone,
                "shipping_method": "NA",
                "postal_code": "NA",
                "city": "NA",
                "extra_description": disease,

                "country": "NA",
                "last_name": lastName,
                "state": "NA"
            },

            "currency": "EGP",
            "integration_id": payment,

        };

        const request = await fetch('https://accept.paymob.com/api/acceptance/payment_keys', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        const response = await request.json()
        let token = response.token;


        // console.log(response.token)

        cardPayment(token)



        // setToken(data.access_token);
    };



    const cardPayment = async (tok) => {


        const iframeURL = `https://accept.paymob.com/api/acceptance/iframes/${frame}?payment_token=${tok}`

        window.location.href = iframeURL;


    }


    // https://accept.paymobsolutions.com/standalone?ref=p_LRR2aXJSUnNieFZnYk0zMVd3MVdCUWl6Zz09X3dzbHN6Z2RvZTZCMFVsa29ROERTQWc9PQ


    // handleClick(499999)




    return (
        <div>
            <title>Evolution Fitness | Subscribe</title>
            <meta name="description" content="Subscribe to Evolution Fitness Gym." />

            <NavBar active="Subscribe" />

            <div>
                <div className="container" data-aos="fade-up">

                    <div className="container-right">

                        {/* <div className="first-header"> */}
                        <div className="first-header">
                            <h2 className="subscribe-header">
                                Checkout
                            </h2>
                        </div>
                        {/* </div> */}
                        <form id="form-signup" className="checkout-form">
                            <p className="ps-notes ">سنتصل بك بعد عملية الدفع لاختيار موعد بدء الاشتراك وتأكيد بعض البيانات</p>
                            <p className="ps-notes ">WE WILL CALL YOU AFTER THE PAYMENT TO SET UP THE SUBSCRIPTION START DATE AND CONFIRM OTHER DETAILS</p>
                            <p className="ps-notes red">DO NOT ATTEMPT MORE THAN ONE PAYMENT IN ONE HOUR.</p>
                            <fieldset className="fieldset-info">
                                <div className="info">
                                    <label htmlFor="first_name" >Subscriber First Name*</label>
                                    <input id="first-name" className="input" type="name" placeholder="Ex: Mohamed" value={firstName} onChange={onFirstNameChange} required />
                                </div>
                                <div className="info">
                                    <label htmlFor="last_name">Subscriber Last Name*</label>
                                    <input id="last-name" className="input" type="name" placeholder="Ex: Gaber" value={lastName} onChange={onLastNameChange} required />
                                </div>
                            </fieldset>
                            <fieldset className="fieldset-info">

                                <div className="info">
                                    <label htmlFor="phone">Phone Number*</label>
                                    <input id="phone" type="tel" className="input" placeholder="Ex: 01010101010" value={phone} onChange={onPhoneChange} required />
                                </div>
                                <div className="info">
                                    <label htmlFor="subscription_type" >Payment Method* (select)</label>
                                    <select className="input" value={payment} onChange={onPaymentChange} required>
                                        <option value="" disabled>Payment Method</option>
                                        {methods.map((option, index) => {
                                            return <option key={index} value={option.value}>
                                                {option.name}
                                            </option>
                                        })}
                                    </select>
                                    {/* <p>hi</p> */}
                                </div>


                            </fieldset>
                            <fieldset className="fieldset-info">


                                <div className="info">
                                    <label htmlFor="subscription_type" >Type* (select)</label>
                                    <select className="input" value={type} onChange={onTypeChange} required>
                                        <option value="" disabled>Type</option>
                                        {types.map((option, index) => {
                                            return <option key={index} value={option} >
                                                {option}
                                            </option>
                                        })}
                                    </select>
                                </div>
                                <div className="info">
                                    <label htmlFor="subscription_bundles" >Bundle* (select the type first)</label>

                                    <select className="input" value={bundle} disabled={!type} onChange={onBundleChange} required>
                                        <option value="" disabled >Bundle</option>
                                        {bundles.map((option, index) => {
                                            return <option key={index} value={option.value} >
                                                {option.name}
                                            </option>
                                        })}
                                    </select>
                                </div>

                            </fieldset>

                            <fieldset className="fieldset-info">
                                <div className="info">
                                    <label htmlFor="mail">Email*</label>
                                    <input id="mail" type="mail" className="input" placeholder="example@email.com" value={mail} onChange={onMailChange} required />
                                </div>


                            </fieldset>

                            <fieldset className="fieldset-info">

                                <div className="info">
                                    <label htmlFor="disease">Diseases or Injuries  (الأمراض أو الاصابات)</label>
                                    <input id="disease" type="disease" className="input" placeholder="Diabetes(السكر), Broken Leg(قدم مكسورة)" value={disease} onChange={onDiseaseChange} />
                                </div>

                            </fieldset>


                            <fieldset id="fieldset-submission">
                                <div className="check-price"><span className="price">{amount}</span>EGP</div>
                                <button type="submit" onClick={(event) => { handleClick(amount, event) }} disabled={check} >Proceed to Payment</button>
                            </fieldset>
                            {/* <p></p> */}

                        </form>
                    </div>

                </div>
                <Footer />
            </div>
        </div >
    )


}

export default Subscribe;