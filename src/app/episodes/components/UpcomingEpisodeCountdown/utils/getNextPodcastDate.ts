export const getNextPodcastDate = () => {
  const fromDate = new Date();
  const PODCAST_DAY_OF_WEEK = 3;
  const PODCAST_FREQUENCY = 2;
  const STARTING_PODCAST_DATE = "2023-10-04T21:00:00";

  const dateDiffInDays = (a: Date, b: Date) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  };
  let nextPodcastDate = new Date(fromDate.getTime());
  nextPodcastDate.setDate(
    nextPodcastDate.getDate() +
      ((PODCAST_DAY_OF_WEEK + 7 - nextPodcastDate.getDay()) % 7)
  );
  const weeksToPocast =
    (dateDiffInDays(new Date(STARTING_PODCAST_DATE), nextPodcastDate) / 7) %
    PODCAST_FREQUENCY;
  nextPodcastDate.setUTCDate(nextPodcastDate.getUTCDate() + 7 * weeksToPocast);
  nextPodcastDate.setUTCHours(21);
  nextPodcastDate.setUTCMinutes(30);
  nextPodcastDate.setUTCSeconds(0);
  return nextPodcastDate;
};
