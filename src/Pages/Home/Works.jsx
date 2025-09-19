import Container from "../../Components/Container/Container";

const data = [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.096-1.125a1.997 1.997 0 0 0-.166-.468m2.385-2.02a1.25 1.25 0 0 0-.256-.475L13.13 6.645m-9.338 0h9.338m-9.338 0a2.25 2.25 0 0 0-2.25 2.25v2.818m16.5-7.5v2.182m0 0a2.25 2.25 0 0 1-.256-.475m0 0a2.25 2.25 0 0 0-2.132-2.88l-1.391-.194c-.456-.064-.93-.064-1.386 0L13.34 3.73a2.25 2.25 0 0 0-2.132 2.88h-.114m6.315 2.5a2.25 2.25 0 0 1-2.25 2.25H9.75"
                />
            </svg>
        ),
        title: 'Booking Pick & Drop',
        description: 'From personal packages to business shipments — we deliver on time, every time.',
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.096-1.125a1.997 1.997 0 0 0-.166-.468m2.385-2.02a1.25 1.25 0 0 0-.256-.475L13.13 6.645m-9.338 0h9.338m-9.338 0a2.25 2.25 0 0 0-2.25 2.25v2.818m16.5-7.5v2.182m0 0a2.25 2.25 0 0 1-.256-.475m0 0a2.25 2.25 0 0 0-2.132-2.88l-1.391-.194c-.456-.064-.93-.064-1.386 0L13.34 3.73a2.25 2.25 0 0 0-2.132 2.88h-.114m6.315 2.5a2.25 2.25 0 0 1-2.25 2.25H9.75"
                />
            </svg>
        ),
        title: 'Cash On Delivery',
        description: 'From personal packages to business shipments — we deliver on time, every time.',
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.096-1.125a1.997 1.997 0 0 0-.166-.468m2.385-2.02a1.25 1.25 0 0 0-.256-.475L13.13 6.645m-9.338 0h9.338m-9.338 0a2.25 2.25 0 0 0-2.25 2.25v2.818m16.5-7.5v2.182m0 0a2.25 2.25 0 0 1-.256-.475m0 0a2.25 2.25 0 0 0-2.132-2.88l-1.391-.194c-.456-.064-.93-.064-1.386 0L13.34 3.73a2.25 2.25 0 0 0-2.132 2.88h-.114m6.315 2.5a2.25 2.25 0 0 1-2.25 2.25H9.75"
                />
            </svg>
        ),
        title: 'Delivery Hub',
        description: 'From personal packages to business shipments — we deliver on time, every time.',
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.096-1.125a1.997 1.997 0 0 0-.166-.468m2.385-2.02a1.25 1.25 0 0 0-.256-.475L13.13 6.645m-9.338 0h9.338m-9.338 0a2.25 2.25 0 0 0-2.25 2.25v2.818m16.5-7.5v2.182m0 0a2.25 2.25 0 0 1-.256-.475m0 0a2.25 2.25 0 0 0-2.132-2.88l-1.391-.194c-.456-.064-.93-.064-1.386 0L13.34 3.73a2.25 2.25 0 0 0-2.132 2.88h-.114m6.315 2.5a2.25 2.25 0 0 1-2.25 2.25H9.75"
                />
            </svg>
        ),
        title: 'Booking SME & Corporate',
        description: 'From personal packages to business shipments — we deliver on time, every time.',
    },
];

const Works = () => {
    return (
        <section className="py-10">
            <Container>
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">How it Works</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start text-left"
                            >
                                <div className="text-gray-600 mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Works;