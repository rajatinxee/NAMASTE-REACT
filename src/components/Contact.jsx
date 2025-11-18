

const Contact = () => {
    return (
        <div className="m-6 p-4 flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl mb-4">Fill this Form and Contact Rajat</h1>
            {/* <p>This is the Contact page of our application.</p> */}

            <form className="flex flex-col items-center">

                <input
                type="text"
                placeholder="Enter your Name: "
                className="border border-gray-800 p-3 m-3 rounded-md bg-yellow-50"
                />

                <input
                type="text"
                placeholder="Your Message"
                className="border border-gray-800 p-3 m-3 rounded-md bg-pink-50"
                />

                <button className="bg-black text-white p-3 m-3 rounded-lg font-bold ">Submit</button>

            </form>

        </div>
    );
}

export default Contact;
