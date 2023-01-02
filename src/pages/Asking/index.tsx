import { SectionCollapsible } from "./components/SectionCollapsible.tsx"
import { askingData } from "./information"

export function Asking  (){

    return (
       <div className="asking_container">
        {
            askingData.map((ask)=>{
                console.log(ask.title)
                return (
                    <SectionCollapsible title={ask.title} content={ask.content}/>
                    // <h6>{ask.title}</h6>
                )
            })
        }
       </div>
    )
}