import Layout from "../components/Layout"

const about = () => {
    return (
        <Layout title="About BlogSpace">
            <h1 className="text-5xl border-b-4 pb-5 font-bold">
                About
            </h1>
            <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
                <h3 className="text-2xl mb-5 font-semibold">
                    BlogSpace
                </h3>
                <p className="mb-3 font-semibold">
                    Hi I am Himanshu Bhardwaz a full stack developer proficient with MERN stack.
                    I write blogs just to maintain a diary of my technical growth.
                </p>
                <p className="mb-3 font-semibold">
                    Version 1.0
                </p>
            </div>
        </Layout>
    )
}

export default about
