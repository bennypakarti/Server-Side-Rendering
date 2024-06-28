import {Box, Flex, Text, Image, Button } from "@chakra-ui/react"

const LandingPage = ({ profile }) => {
    console.log("profile data didalam components", profile)
    return(
        <Flex direction="row" flexWrap="wrap" justifyContent={"center"}>
            {profile.map((user, index)=>{
                return(
                    <Box key={index} className="userbox">
                        <Text fontSize="xl">{user.name}</Text>
                        <Text fontSize="md">{user.job}</Text>
                        <Text fontSize="md">{user.greeting}</Text>
                        <Image src={user.photo} alt="user photo's" width={200} height={"auto"}/>
                     </Box>
                )
            })}
        </Flex>
    )
}

export default LandingPage