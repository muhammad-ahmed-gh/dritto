const setMaxRecommendedVideos = function (event: React.ChangeEvent) {
  const value = (event.currentTarget as HTMLInputElement).value;
  console.log(value);
};

export default function YouTubeTab() {
  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-auto">
      <div className="flex justify-between items-center">
        <span>Max recommended videos</span>
        <input
          className="w-[70px] border border-[#dadada] rounded-[5px] p-[5px_10px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-0 focus:border-2 focus:border-primary"
          type="number"
          defaultValue={10}
          min={0}
          onChange={setMaxRecommendedVideos}
        />
      </div>
    </main>
  );
}
