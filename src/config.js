// All personal details live here. Text is shown exactly as written.
// Dates use ISO format with the India offset (+05:30); the date lines are generated from them.

export const config = {
  bride: { name: 'Rifa Fathima' },
  groom: { name: 'Rinshad K' },
  timeZone: 'Asia/Kolkata',

  invitation: {
    // Arabic Quranic verse displayed at the top of the invitation
    ayah: 'وَخَلَقْنَاكُمْ أَزْوَاجًا',
    bismillahMeaning: 'And We created you in pairs. (Surah An-Naba 78:8)',
    blessingsIntro: 'With joyful hearts, we request the honour of your presence and dua on the Nikkah ceremony of',
    // Used on the reception invitation names page instead of blessingsIntro
    blessingsIntroReception: 'With joyful hearts, we request the honour of your presence and dua on the marriage ceremony of',
    blessings: '',
    hosts: '',
    hostsLine: '',
    joiner: '&',
    // Bride's family details (shown below bride's name); use \n for line breaks
    brideDetails: 'Pullanikkattil House\nD/o Shanavas Hamzu & Sajna T M\nGrd/o Kunjahamed Mesthiri (Late) & Fathima Bangalath (Late)\n& Moideen T M & Sakeena',
    // Groom's family details (shown below groom's name); use \n for line breaks
    groomParents: 'Kolangara House\nS/o Hameed K & Rasiya V\nGrs/o Veeran (Late) & Fathima\n& Abdurahiman V T (Late) & Mariya Kutty',
  },

  nikah: {
    eyebrow: 'The sacred union',
    title: 'Nikkah',
    subtitle: 'Ceremony',
    start: '2026-12-19T11:00:00+05:30',
    dayText: 'On Saturday',
    hijri: '',
    timeText: 'at 11:00 AM',
    venuePrefix: 'At:',
    venue: 'Prestige Palace',
    address: ['Edakkara'],
    // Paste the exact Google Maps share link in `url` (or fill lat/lng) to pin the venue precisely.
    map: { url: 'https://maps.app.goo.gl/BeEQD9UAibzygTQR8?g_st=ic', lat: null, lng: null, query: 'Prestige Palace, Edakkara' },
  },

  reception: {
    eyebrow: '',
    title: 'Reception',
    subtitle: '',
    start: '2026-12-21T11:00:00+05:30',
    dayText: 'On Monday,',
    hijri: '',
    timeText: '11:00 AM onwards',
    venuePrefix: 'At –',
    venue: 'CP Auditorium',
    address: ['Pulliyil'],
    map: { url: 'https://maps.app.goo.gl/isE8W2QrsPYYngVGA?g_st=ic', lat: null, lng: null, query: 'CP Auditorium, Pulliyil' },
  },

  // Closing page sign-off — Nikkah invitation
  families: 'Kolangara Family & Pullanikkattil Family',
  // Closing page sign-off — Reception invitation
  familiesReception: 'Kolangara Family & Pullanikkattil Family',

  // Put the song in /public/music/ and set e.g. src: '/music/song.mp3'. Empty = no music button.
  music: { src: '/music/song.mp3', volume: 0.6, startAt: 0 },

  text: {
    sealHint: 'Tap to open',
    revealTitle: 'Tap to Reveal',
    revealedTitle: 'Save the Date',
    inshallah: 'Inshallah',
    countdownTitle: 'Counting down to the big day',
    countdownDone: 'Today is the day \u2014 Alhamdulillah',
    closingKicker: 'With love & duas',
    closing: 'Your presence and duas are the most precious gift we could ask for. We cannot wait to celebrate with you.',
    compliments: 'With Best Complements',
  },

  // Public address after deploying (used for share previews), e.g. 'https://rinshad-rifa.vercel.app'.
  siteUrl: '',
};
