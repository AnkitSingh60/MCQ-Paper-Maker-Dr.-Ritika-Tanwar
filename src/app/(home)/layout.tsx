import {Metadata} from "next"
import {generatePageTitle} from "@/shared/utils"

type Props = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: generatePageTitle("Home"),
}

export default function HomeLayout(props: Props) {
  return <>{props.children}</>
}
