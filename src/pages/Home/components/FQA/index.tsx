import { SectionCollapsible } from "../../../../lib/components/SectionCollapsible.tsx"
import { questions } from "./questions"
import { FQAStyled } from "./FQA.styled"
import  FQA_image from '../../../../assets/images/FQA_image.png'
import  vammo_vector from '../../../../assets/images/vammo_vector.png'
import { useState } from "react"

export function FQA(){

    const [currentOpened, setCurrentOpened] = useState<number>(-1)


    const handleSectionCollapse = (index: number) => {
        if(currentOpened === index) setCurrentOpened(-1)
        else setCurrentOpened(index)
    }

    return (
       <FQAStyled>
        <div className="questions__block">
            <h1>Tem alguma dúvida?</h1>
            <div className="questions__items">
                {
                    questions.map((ask,index)=>{
                        return (
                            <SectionCollapsible
                            isOpen={index === currentOpened}
                            onClick={() => handleSectionCollapse(index)}
                            key={index}
                            title={ask.title}
                            content={ask.content}
                            />
                            )
                        })
                    }
            </div>
        </div>
        <div className="questions__image">
            <img className="questions__vector" src={vammo_vector}/>
            <img src={FQA_image}/>
        </div>
       </FQAStyled>
    )
}