export type Song = {
    title: string;
    url: string;
  };
  
  export type Album = {
    name: string;
    artist: string;
    coverUrl: string;
    palette: string[];
    songs: {
      title: string;
      url: string;
    }[];
  }
  
  export const albums: Album[] = [
    {
      name: "DAMN",
      artist: "Kendrick Lamar",
      coverUrl: "https://songs-hk177.s3.us-west-2.amazonaws.com/cover+pages/Damn+Cover.jpg",
      palette: ["#D6D6E4","#7E3843", "#D6D6E4"],
      songs: [
        {
          title: "BLOOD",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Kendrick+Lamar+-+DAMN/BLOOD.mp3"
        },
        {
          title: "DNA",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Kendrick+Lamar+-+DAMN/DNA.mp3"
        },
        {
          title: "DUCKWORTH",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Kendrick+Lamar+-+DAMN/DUCKWORTH.mp3"
        },
        {
          title: "ELEMENT",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Kendrick+Lamar+-+DAMN/ELEMENT.mp3"
        },
        {
          title: "FEAR",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Kendrick+Lamar+-+DAMN/FEAR.mp3"
        },
        {
          title: "FEEL",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Kendrick+Lamar+-+DAMN/FEEL.mp3"
        },
        {
          title: "GOD",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Kendrick+Lamar+-+DAMN/GOD.mp3"
        },
        {
          title: "HUMBLE",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Kendrick+Lamar+-+DAMN/HUMBLE.mp3"
        },
        {
          title: "LOVE",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Kendrick+Lamar+-+DAMN/LOVE.mp3"
        },
        {
          title: "LOYALTY",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Kendrick+Lamar+-+DAMN/LOYALTY.mp3"
        },
        {
          title: "LUST",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Kendrick+Lamar+-+DAMN/LUST.mp3"
        },
        {
          title: "PRIDE",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Kendrick+Lamar+-+DAMN/PRIDE.mp3"
        },
        {
          title: "XXX",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Kendrick+Lamar+-+DAMN/XXX.mp3"
        },
        {
          title: "YAH",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Kendrick+Lamar+-+DAMN/YAH.mp3"
        }
      ]
    },
    {
      name: "Take care",
      artist: "Drake",
      coverUrl: "https://songs-hk177.s3.us-west-2.amazonaws.com/cover+pages/take+care+cover.jpeg",
      palette: [],
      songs: [
        {
          title: "Headlines",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Take+care/EP/01-Headlines.mp3"
        },
        {
          title: "Dreams Money Can Buy",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Take+care/EP/02-Dreams+Money+Can+Buy.mp3"
        },
        {
          title: "Club Paradise",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Take+care/EP/03-Club+Paradise.mp3"
        },
        {
          title: "Trust Issues",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Take+care/EP/04-Trust+Issues.mp3"
        },
        {
          title: "The Zone",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Take+care/EP/06-The+Zone+(Ft.+The+Weeknd).mp3"
        },
        {
          title: "Free Spirit",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Take+care/EP/07-Free+Spirit+(Ft.+Rick+Ross).mp3"
        },
        {
          title: "Marvin's Room",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/Take+care/EP/08-Marvin's+Room.mp3"
        }
      ]
    },
    {
      name: "blonde",
      artist: "Frank Ocean",
      coverUrl: "https://songs-hk177.s3.us-west-2.amazonaws.com/cover+pages/blonde+cover.jpg",
      palette: [],
      songs: [
        {
          title: "Nikes",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/blonde/01+Nikes.mp3"
        },
        {
          title: "Ivy",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/blonde/02+Ivy.mp3"
        },
        {
          title: "Pink + White",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/blonde/03+Pink+%2B+White.mp3"
        },
        {
          title: "Be Yourself",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/blonde/04+Be+Yourself.mp3"
        },
        {
          title: "Solo",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/blonde/05+Solo.mp3"
        },
        {
          title: "Skyline To",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/blonde/06+Skyline+To.mp3"
        },
        {
          title: "Self Control",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/blonde/07+Self+Control.mp3"
        },
        {
          title: "Good Guy",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/blonde/08+Good+Guy.mp3"
        },
        {
          title: "Nights",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/blonde/09+Nights.mp3"
        },
        {
          title: "Solo (Reprise)",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/blonde/10+Solo+(Reprise).mp3"
        },
        {
          title: "Pretty Sweet",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/blonde/11+Pretty+Sweet.mp3"
        },
        {
          title: "Facebook Story",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/blonde/12+Facebook+Story.mp3"
        },
        {
          title: "Close to You",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/blonde/13+Close+to+You.mp3"
        },
        {
          title: "White Ferrari",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/blonde/14+White+Ferrari.mp3"
        },
        {
          title: "Seigfried",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/blonde/15+Seigfried.mp3"
        },
        {
          title: "Godspeed",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/blonde/16+Godspeed.mp3"
        },
        {
          title: "Futura Free",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/blonde/17+Futura+Free.mp3"
        }
      ]
    },
    {
      name: "Cigarettes After Sex",
      artist: "Cigarettes After Sex",
      coverUrl: "https://songs-hk177.s3.us-west-2.amazonaws.com/cover+pages/cigarettes+cover.jpg",
      palette: [],
      songs: [
        {
          title: "Apocalypse",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/cigarettes/Apocalypse.mp3"
        },
        {
          title: "Each Time You Fall in Love",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/cigarettes/Each+Time+You+Fall+in+Love.mp3"
        },
        {
          title: "Flash",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/cigarettes/Flash.mp3"
        },
        {
          title: "John Wayne",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/cigarettes/John+Wayne.mp3"
        },
        {
          title: "K",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/cigarettes/K.mp3"
        },
        {
          title: "Opera House",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/cigarettes/Opera+House.mp3"
        },
        {
          title: "Sunsetz",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/cigarettes/Sunsetz.mp3"
        },
        {
          title: "Sweet",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/cigarettes/Sweet.mp3"
        },
        {
          title: "Truly",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/cigarettes/Truly.mp3"
        },
        {
          title: "Young & Dumb",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/cigarettes/Young+%26+Dumb.mp3"
        }
      ]
    },
    {
      name: "HNDRXX",
      artist: "Future",
      coverUrl: "https://songs-hk177.s3.us-west-2.amazonaws.com/cover+pages/hndrxx+cover.jpg",
      palette: [],
      songs: [
        {
          title: "My Collection",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/01.+Future+-+My+Collection.mp3"
        },
        {
          title: "Comin Out Strong",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/02.+Future+-+Comin+Out+Strong+(feat.+The+Weeknd).mp3"
        },
        {
          title: "Lookin Exotic",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/03.+Future+-+Lookin+Exotic.mp3"
        },
        {
          title: "Damage",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/04.+Future+-+Damage.mp3"
        },
        {
          title: "Use Me",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/05.+Future+-+Use+Me.mp3"
        },
        {
          title: "Incredible",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/06.+Future+-+Incredible.mp3"
        },
        {
          title: "Testify",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/07.+Future+-+Testify.mp3"
        },
        {
          title: "Fresh Air",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/08.+Future+-+Fresh+Air.mp3"
        },
        {
          title: "Neva Missa Lost",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/09.+Future+-+Neva+Missa+Lost.mp3"
        },
        {
          title: "Keep Quiet",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/10.+Future+-+Keep+Quiet.mp3"
        },
        {
          title: "Hallucinating",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/11.+Future+-+Hallucinating.mp3"
        },
        {
          title: "I Thank U",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/12.+Future+-+I+Thank+U.mp3"
        },
        {
          title: "New Illuminati",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/13.+Future+-+New+Illuminati.mp3"
        },
        {
          title: "Turn on Me",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/14.+Future+-+Turn+on+Me.mp3"
        },
        {
          title: "Selfish",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/15.+Future+-+Selfish+(feat.+Rihanna).mp3"
        },
        {
          title: "Solo",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/16.+Future+-+Solo.mp3"
        },
        {
          title: "Sorry",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/17.+Future+-+Sorry.mp3"
        },
        {
          title: "PIE",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/18.+Future+-+PIE+(feat.+Chris+Brown).mp3"
        },
        {
          title: "You da Baddest",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/hndrxx/19.+Future+-+You+da+Baddest+(feat.+Nicki+Minaj).mp3"
        }
      ]
    },
    {
      name: "Whole Lotta Red",
      artist: "Playboi Carti",
      coverUrl: "https://songs-hk177.s3.us-west-2.amazonaws.com/cover+pages/whole+lotta+red+cover.jpeg",
      palette: [],
      songs: [
        {
          title: "Rockstar Made",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/01+Rockstar+Made.mp3"
        },
        {
          title: "Go2DaMoon",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/02+Go2DaMoon+(feat.+Kanye+West).mp3"
        },
        {
          title: "Stop Breathing",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/03+Stop+Breathing.mp3"
        },
        {
          title: "Beno!",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/04+Beno!.mp3"
        },
        {
          title: "JumpOutTheHouse",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/05+JumpOutTheHouse.mp3"
        },
        {
          title: "M3tamorphosis",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/06+M3tamorphosis+(feat.+Kid+Cudi).mp3"
        },
        {
          title: "Slay3r",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/07+Slay3r.mp3"
        },
        {
          title: "No Sl33p",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/08+No+Sl33p.mp3"
        },
        {
          title: "New Tank",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/09+New+Tank.mp3"
        },
        {
          title: "Teen X",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/10+Teen+X+(feat.+Future).mp3"
        },
        {
          title: "Meh",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/11+Meh.mp3"
        },
        {
          title: "Vamp Anthem",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/12+Vamp+Anthem.mp3"
        },
        {
          title: "New N3on",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/13+New+N3on.mp3"
        },
        {
          title: "Control",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/14+Control.mp3"
        },
        {
          title: "Punk Monk",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/15+Punk+Monk.mp3"
        },
        {
          title: "On That Time",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/16+On+That+Time.mp3"
        },
        {
          title: "King Vamp",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/17+King+Vamp.mp3"
        },
        {
          title: "Place",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/18+Place.mp3"
        },
        {
          title: "Sky",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/19+Sky.mp3"
        },
        {
          title: "Over",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/20+Over.mp3"
        },
        {
          title: "ILoveUIHateU",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/21+ILoveUIHateU.mp3"
        },
        {
          title: "Die4Guy",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/22+Die4Guy.mp3"
        },
        {
          title: "Not PLaying",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/23+Not+PLaying.mp3"
        },
        {
          title: "F33l Lik3 Dyin",
          url: "https://songs-hk177.s3.us-west-2.amazonaws.com/whole+lotta+red/24+F33l+Lik3+Dyin.mp3"
        }
      ]
    }
  ];

export interface songList {
  name: string;
  artist: string;
  coverUrl: string;
  songUrl: string;
}

export const songs: songList[] = albums.reduce<songList[]>((allSongs, album) => {
  const albumSongs = album.songs.map(song => ({
    name: song.title,
    artist: album.artist,
    coverUrl: album.coverUrl,
    songUrl: song.url
  }));
  
  return [...allSongs, ...albumSongs];
}, []);