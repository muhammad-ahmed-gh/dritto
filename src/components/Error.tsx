export default function Error(props: {message: string}) {
  return <main className="p-[20px] h-tab-height">
    {props.message}
  </main>
}