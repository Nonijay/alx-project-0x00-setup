import Card from "@/components/Card"

const Landing: React.FC = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <h1 className="text-x1 font-extralight">
                Landing Page
            </h1>
            <div className=" grid grid-cols-3 gap-4 px-4 py-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            

        </div>
    )
}

export default Landing