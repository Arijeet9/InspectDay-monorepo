import { Button, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
// import { useParams, useRouter } from 'solito/navigation'
// import { useRoute, useNavigation } from '@react-navigation/native'
import { useParams,useNavigate } from 'react-router-dom'; 


export function UserDetailScreen() {
  // const router = useRouter()
  // const { id } = useParams()
  // const navigation = useNavigation()
  // const route=useRoute()
  // const { id } = route.params as {id:string}


  const navigate=useNavigate()
  const { id } = useParams<{ id: string }>(); // Get route parameters


  return (
    <YStack f={1} jc="center" ai="center" gap="$4" bg="$background">
      <Paragraph ta="center" fow="700" col="$blue10">{`User ID: ${id}`}</Paragraph>
      <Button icon={ChevronLeft} onPress={() => navigate("/")}>
        Go Home
      </Button>
    </YStack>
  )
}
