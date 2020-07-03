import Head from 'next/head'
import Banner from '../components/banner'
import NavBar from '../components/navbar'
import OfferSection from '../components/offer-section'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
            </Head>

            <div>
                <Banner />
                <NavBar />
                <OfferSection />
            </div>

            <style jsx>{`
            `}</style>

        </div>
    )
}
