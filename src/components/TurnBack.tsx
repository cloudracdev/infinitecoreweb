import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

function TurnBack({title}: {title: string}) {
    return (
      <div className="flex items-center gap-4 mb-4">
        <Link to="/">
            <ArrowLeft className="mr-2 h-5 w-5" />
        </Link>
        <h1 className="text-4xl font-semibold text-black sm:text-5xl">{title}</h1>
      </div>
    )
}

export default TurnBack
