import { useRouter } from "next/router";

export default function AuthPage() {
  const router = useRouter();
  const { mode } = router.query;

  return <div></div>;
}
