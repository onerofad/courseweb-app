import { useEffect, useState } from "react"
import { Accordion, Icon } from "semantic-ui-react"
import { getContent } from "../API/sila_api"

export const AccordionCourse = () => {

    const [contents, setContent] = useState([])

    useEffect(() => {
        getContents()
    }, [])

    const getContents = () => {
        getContent().get("/")
        .then(response => setContent(response.data))
    }

    const [activeIndex, setactiveIndex] = useState(0)

    const handleClick = (titleProps) => {
        const index  = titleProps
        const newIndex = activeIndex === index ? -1 : index
    
        setactiveIndex(newIndex)
    }
    return(
        <Accordion styled>
            <Accordion.Title
                active={activeIndex}
                index={0}
                onClick={() => handleClick(0)}
            >
                <Icon name="dropdown" />
                Content 1
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
                This is content 1
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex}
              index={1}
              onClick={() => handleClick(1)}
            >
                <Icon name="dropdown" />
                Content 2
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
                This is content 2
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex}
              index={2}
              onClick={() => handleClick(2)}
            >
                <Icon name="dropdown" />
                Content 3
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
                This is content 3
            </Accordion.Content>

        </Accordion>
    )

}