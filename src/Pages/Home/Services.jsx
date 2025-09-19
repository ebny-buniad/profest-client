import Container from "../../Components/Container/Container";

const servicesData = [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 text-gray-700"
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                <path d="M9.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                <path d="M14.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                <path d="M12 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
        ),
        title: 'Express & Standard Delivery',
        description: 'We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.',
        bgColor: 'bg-white',
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 text-green-700"
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                <path d="M9.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                <path d="M14.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                <path d="M12 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
        ),
        title: 'Nationwide Delivery',
        description: 'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.',
        bgColor: 'bg-lime-200',
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 text-gray-700"
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                <path d="M9.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                <path d="M14.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                <path d="M12 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
        ),
        title: 'Fulfillment Solution',
        description: 'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.',
        bgColor: 'bg-white',
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 text-gray-700"
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                <path d="M9.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                <path d="M14.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                <path d="M12 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
        ),
        title: 'Cash on Home Delivery',
        description: '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.',
        bgColor: 'bg-white',
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 text-gray-700"
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                <path d="M9.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                <path d="M14.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                <path d="M12 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
        ),
        title: 'Corporate Service / Contract In Logistics',
        description: 'Customized corporate services which includes warehouse and inventory management support.',
        bgColor: 'bg-white',
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 text-gray-700"
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                <path d="M9.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                <path d="M14.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                <path d="M12 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
        ),
        title: 'Parcel Return',
        description: 'Through our reverse logistics facility we allow and customers to return or exchange their products with online business merchants.',
        bgColor: 'bg-white',
    },
];

const Services = () => {
    return (
        <section className="bg-slate-800 text-white py-20">
            <Container>
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {servicesData.map((service, index) => (
                            <div
                                key={index}
                                className={`rounded-xl shadow-lg p-8 text-left ${service.bgColor} text-gray-800`}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="bg-white rounded-full p-3 mr-4">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Services;