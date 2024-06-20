import { Button, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { useParams, useRouter } from 'solito/navigation'
import { useRoute, useNavigation } from '@react-navigation/native'

export function UserDetailScreen() {
  // const router = useRouter()
  // const { id } = useParams()
  const navigation = useNavigation()
  const route=useRoute()
  const { id } = route.params as {id:string}

  return (
    <YStack f={1} jc="center" ai="center" gap="$4" bg="$background">
      <Paragraph ta="center" fow="700" col="$blue10">{`User ID: ${id}`}</Paragraph>
      <Button icon={ChevronLeft} onPress={() => navigation.goBack()}>
        Go Home
      </Button>
    </YStack>
  )
}
