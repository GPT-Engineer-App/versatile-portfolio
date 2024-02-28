import { Box, VStack, Heading, Text, Link, SimpleGrid, Image, Flex, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.900" color="white" minH="100vh">
      <VStack spacing={10} p={5}>
        {/* Bio Section */}
        <Heading>Bio</Heading>
        <Text>Multifacet medical expert, machine learning engineer, and entrepreneur. Passionate about combining tech and healthcare to improve lives.</Text>

        {/* Publications Section */}
        <Heading>Publications</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box p={5} boxShadow="md" bg="gray.700" borderRadius="md">
            <Heading size="md">Publication Title</Heading>
            <Text>Short description of the publication...</Text>
          </Box>
          {/* Add more publication boxes here */}
        </SimpleGrid>

        {/* Photography Gallery */}
        <Heading>Photography</Heading>
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={10}>
          <Image src="https://images.unsplash.com/photo-1604430456280-43f652c497aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MDkwOTc2NTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
          {/* Add more images here */}
        </SimpleGrid>

        {/* Innovation Projects */}
        <Heading>Innovation Projects</Heading>
        <VStack spacing={5} align="stretch">
          <Box p={5} boxShadow="md" bg="gray.700" borderRadius="md">
            <Heading size="md">Project Name</Heading>
            <Text>Description of the project with visual and interactive elements.</Text>
          </Box>
          {/* Add more project boxes here */}
        </VStack>

        {/* CV and Contact Section */}
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" w="full">
          <VStack align="flex-start" mb={{ base: 5, md: 0 }}>
            <Heading>CV & Contact</Heading>
            <Link href="#" isExternal>
              <Button leftIcon={<FaFileDownload />} colorScheme="green">
                Download CV
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/yourprofile" isExternal>
              <Button leftIcon={<FaLinkedin />} colorScheme="green">
                LinkedIn
              </Button>
            </Link>
            <Link href="https://www.github.com/yourprofile" isExternal>
              <Button leftIcon={<FaGithub />} colorScheme="green">
                GitHub
              </Button>
            </Link>
          </VStack>
          <Box>
            <FormControl id="contact-form">
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your Name" />
              <FormLabel mt={2}>Email</FormLabel>
              <Input placeholder="your-email@example.com" />
              <FormLabel mt={2}>Message</FormLabel>
              <Textarea placeholder="Your message" />
              <Button mt={4} colorScheme="green">
                Send Message
              </Button>
            </FormControl>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Index;
