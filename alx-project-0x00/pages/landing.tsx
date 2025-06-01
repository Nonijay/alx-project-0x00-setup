import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center mt-7">
            <h1 className="text-x1 font-extralight">
                Landing Page
            </h1>
            <div className=" grid grid-cols-2 gap-4 px-4 py-4">
                <Card />
                
                
            </div>
            <div className="flex flex-col ">
                <Button 
                title="Hello"
                styles="rounded-sm bg-blue-500 px-5 py-2 m-3 cursor-pointer hover:bg-blue-900"
                />
                <Button 
                title="HI"
                styles="rounded-md bg-blue-500 px-5 py-2 m-3 cursor-pointer hover:bg-blue-900"
                />
                <Button 
                title="Check In"
                styles="rounded-lg bg-blue-500 px-5 py-2 m-3 cursor-pointer hover:bg-blue-900"
                />
            </div>
            

        </div>
    )
}

export default Landing