import Head from 'next/head'
import Banner from '../components/banner'
import NavBar from '../components/navbar'
import OfferSection from '../components/offer-section'
import SkillSection from '../components/skill-section'
import EmployeeSection from '../components/employee-section'
import RegistrationForm from '../components/registration-form'
import TestimonySection from '../components/testimony-section'
import Footer from '../components/footer'
import { useEffect } from 'react'
import firebase from 'firebase'

export default function Home() {

    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyB76RVjO9RPUijUvmMseUY9-GJO4NVMgWc",
            authDomain: "growthops-demo.firebaseapp.com",
            databaseURL: "https://growthops-demo.firebaseio.com",
            projectId: "growthops-demo",
            storageBucket: "growthops-demo.appspot.com",
            messagingSenderId: "490497491338",
            appId: "1:490497491338:web:e3112ff6bc3ddaba0fc873"
        }

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        }
    }, [])

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" />
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossOrigin="anonymous"></script>
            </Head>

            <div>
                <Banner />
                <NavBar />
                <OfferSection />
                <SkillSection />
                <EmployeeSection />
                <RegistrationForm />
                <TestimonySection />
                <Footer />
            </div>
        </div>
    )
}
