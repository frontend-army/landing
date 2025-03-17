export const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
] as const;
export const PODCAST_DAY_OF_WEEK = 3;
export const STARTING_PODCAST_EPISODE = {
  number: 65,
  year: 2025,
};
export const PODCAST_TIME = "15:00:00.000Z";
export const EPISODE_NAME_PREFIX = "Capítulo";
export const SET_TOPIC_COMMAND = "/definir_tema";
export const PRINT_REMAINING_DAYS = false;
export const EPISODE_NAME_SUFIX = "<A DEFINIR>";
export const MIN_QUESTIONS = 4;
export const NICE_TO_HAVE_QUESTIONS = 8;

export type Episode = {
  number: number;
  date: Date;
};

function getEpisodeDay(year: number, month: number) {
  let date = new Date(
    `${year}-${month.toString().padStart(2, "0")}-01T${PODCAST_TIME}`
  );
  let dayOfWeek = date.getDay();
  let diff = (PODCAST_DAY_OF_WEEK - dayOfWeek + 7) % 7;
  date.setDate(date.getDate() + diff);
  return new Date(
    `${year}-${month.toString().padStart(2, "0")}-${date
      .getDate()
      .toString()
      .padStart(2, "0")}T${PODCAST_TIME}`
  );
}

export function getUpcomingEpisodes(fromDate: Date): Episode[] {
  const year = fromDate.getFullYear();

  if (year < STARTING_PODCAST_EPISODE.year) {
    throw new Error(
      `Cannot generate episodes before ${STARTING_PODCAST_EPISODE.year}`
    );
  }

  return Array.from({ length: MONTHS.length * 2 }, (_, i) => ({
    number:
      (year - STARTING_PODCAST_EPISODE.year) * 12 +
      STARTING_PODCAST_EPISODE.number +
      i,
    date: getEpisodeDay(i > 11 ? year + 1 : year, (i % 12) + 1),
  }));
}


export function getNextEpisode(fromDate: Date) {
  const nextEpisode = getUpcomingEpisodes(fromDate).find(
    (episode) => episode.date.getTime() > fromDate.getTime()
  );

  if (!nextEpisode) {
    throw new Error(`Could not get next episode from date: ${fromDate}`);
  }

  return nextEpisode;
}
