import {Box, Flex, Text, Image, Button } from "@chakra-ui/react"

const ShowCase = ({showcase,profile}) => {
    console.log("showcase", showcase)
    console.log("profile", profile)
    return(
        <Flex direction="row wrap">
            {showcase.map((galery, index) => {
                return(
                    <div key={index}>
                        <Text >{galery.id}</Text>
                        <Text >{galery.title}</Text>
                        <Image src={galery.photo} width={400} height={300}/>
                    </div>
                )
            })}
            </Flex>
            
    )
}

export default ShowCase