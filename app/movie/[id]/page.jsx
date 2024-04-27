"use client"
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
const movies = [
  {
      "id": 1,
      "title": "Anbe Sivam",
      "year": "2003",
      "duration": "160",
      "rating": "8.6",
      "genres": "Adventure | Comedy | Drama",
      "director": "Sundar C.",
      "cast": "Kamal Haasan | Madhavan | Kiran Rathod | Nassar",
      "summary": "Two men, one young and arrogant, the other damaged - physically but not spiritually - by life, are thrown together by circumstances, and find that they are in some ways bound together by fate.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYjY2NDNhOTItNjAwMi00ZjA0LTkzOGYtNWJkZmZiN2FlODU4XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR5,0,140,209_AL_.jpg"
  },
  {
      "id": 2,
      "title": "Nayakan",
      "year": "1987",
      "duration": "145",
      "rating": "0",
      "genres": "Crime | Drama",
      "director": "Mani Ratnam",
      "cast": "Kamal Haasan | Saranya Ponvannan | Delhi Ganesh | Janakaraj",
      "summary": "A common man's struggles against a corrupt police force put him on the wrong side of the law. He becomes a don, who is loved and respected by many, but his growing power and influence exact a heavy toll.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNzEyZTFmZTItYWU2My00ZWZkLTg2NWMtMTEwYmM5YzFmNzFhXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 3,
      "title": "Pather Panchali",
      "year": "1955",
      "duration": "125",
      "rating": "Rate",
      "genres": "Drama",
      "director": "Satyajit Ray",
      "cast": "Kanu Bannerjee | Karuna Bannerjee | Subir Banerjee | Chunibala Devi",
      "summary": "Impoverished priest Harihar Ray, dreaming of a better life for himself and his family, leaves his rural Bengal village in search of work.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMmFkNDY5OTktNzY3Yy00OTFlLThhNjktOTRhMmZjZmIxYjAxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 4,
      "title": "Vikram Vedha",
      "year": "2017",
      "duration": "147",
      "rating": "1",
      "genres": "Action | Crime | Drama",
      "director": "Gayatri",
      "cast": "Madhavan | Vijay Sethupathi | Shraddha Srinath | Kathir",
      "summary": "Vikram, a no-nonsense police officer, accompanied by Simon, his partner, is on the hunt to capture Vedha, a smuggler and a murderer. Vedha tries to change Vikram's life, which leads to a conflict.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BY2FiMTFmMzMtZDI2ZC00NDQyLWExYTUtOWNmZWM1ZDg5YjVjXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 5,
      "title": "Raatchasan",
      "year": "2018",
      "duration": "146",
      "rating": "Rate",
      "genres": "Action | Crime | Drama",
      "director": "Ram Kumar",
      "cast": "Vishnu Vishal | Amala Paul | Radha Ravi | Sangili Murugan",
      "summary": "A sub-inspector sets out in pursuit of a mysterious serial killer who targets teen school girls and murders them brutally.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMjU2NzIzMjYtMGE2ZS00YzgzLWE5MzgtZTFiYTlmOWNlYmJkXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UY209_CR7,0,140,209_AL_.jpg"
  },
  {
      "id": 6,
      "title": "The World of Apu",
      "year": "1959",
      "duration": "105",
      "rating": "2",
      "genres": "Drama",
      "director": "Satyajit Ray",
      "cast": "Soumitra Chatterjee | Sharmila Tagore | Alok Chakravarty | Swapan Mukherjee",
      "summary": "This final installment in Satyajit Ray's Apu Trilogy follows Apu's life as an orphaned adult aspiring to be a writer.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BN2ZhM2NkZDUtMTI3OC00NWE5LWEwYzMtZTlhMjhkZGFlMjQyXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 7,
      "title": "Manichitrathazhu",
      "year": "1993",
      "duration": "169",
      "rating": "Rate",
      "genres": "Comedy | Horror | Mystery",
      "director": "Fazil",
      "cast": "Shobana | Mohanlal | Suresh Gopi | Vinaya Prasad",
      "summary": "When a forbidden room in an old bungalow is unbolted, the spirit of a vengeful dancer is unleashed.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BZjQxMmE4NDMtZGVkYi00YmQyLThiNTMtOTVmNDEyZWQ2MzUwXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 8,
      "title": "Pariyerum Perumal",
      "year": "2018",
      "duration": "154",
      "rating": "3",
      "genres": "Drama",
      "director": "Mari Selvaraj",
      "cast": "Kathir | Anandhi | Yogi Babu | Lijeesh",
      "summary": "A law student from a lower caste begins a friendship with his classmate, a girl who belongs to a higher caste, and the men in her family start giving him trouble over this.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMGYyOTdhMWEtMjdkNi00ZWJhLTkwYTUtODI0M2E4NjIzMTkyXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR3,0,140,209_AL_.jpg"
  },
  {
      "id": 9,
      "title": "96",
      "year": "II) (2018",
      "duration": "158",
      "rating": "Rate",
      "genres": "Drama | Romance",
      "director": "C. Prem Kumar",
      "cast": "Vijay Sethupathi | Adithya Bhaskar | Trisha Krishnan | Gouri Kishan",
      "summary": "Two high school sweethearts meet at a reunion after 22 years and reminisce about their past.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BOGM2YzI4ZjItYjA4Mi00ZDhiLTk1OGEtZmEzN2U3ODNkNTEzXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR6,0,140,209_AL_.jpg"
  },
  {
      "id": 10,
      "title": "Thalapathi",
      "year": "1991",
      "duration": "157",
      "rating": "4",
      "genres": "Action | Crime | Drama",
      "director": "Mani Ratnam",
      "cast": "Rajinikanth | Mammootty | Shobana | Arvind Swamy",
      "summary": "An orphan named Surya raised in a slum befriends a good crime boss named Devaraj and works for him. Their existence is threatened when a new honest district collector arrives.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYzIwZDlkOTEtZjI1Zi00ZGRmLWI2NDEtMjBmM2FjNGMxODEzXkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_UY209_CR6,0,140,209_AL_.jpg"
  },
  {
      "id": 11,
      "title": "Drishyam",
      "year": "2013",
      "duration": "160",
      "rating": "Rate",
      "genres": "Crime | Drama | Thriller",
      "director": "Jeethu Joseph",
      "cast": "Mohanlal | Meena | Asha Sharath | Ansiba",
      "summary": "A man goes to extreme lengths to save his family from punishment after the family commits an accidental crime.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYmY3MzYwMGUtOWMxYS00OGVhLWFjNmUtYzlkNGVmY2ZkMjA3XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UY209_CR9,0,140,209_AL_.jpg"
  },
  {
      "id": 12,
      "title": "Aruvi",
      "year": "2016",
      "duration": "130",
      "rating": "5",
      "genres": "Drama",
      "director": "Arun Prabhu Purushothaman",
      "cast": "Aditi Balan | Padmashri Mohammad Ali | Pradeep Anthony | Arnold",
      "summary": "A gentle girl born and brought up amidst the ever growing eco-social-consumeristic environment finds it difficult to fit in the society. She decides to take it hard on the people. What she does is the rest of the story.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BZDM5N2FlNTctNTY3MS00OWNjLWFmOTAtYjJkMjU5NWIyNDVmXkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_UY209_CR8,0,140,209_AL_.jpg"
  },
  {
      "id": 13,
      "title": "Visaaranai",
      "year": "2015",
      "duration": "117",
      "rating": "Rate",
      "genres": "Crime | Drama | Thriller",
      "director": "Vetrimaaran",
      "cast": "Dinesh | Samuthirakani | Anandhi | Murugadass",
      "summary": "Four labourers are tortured by the police to confess to a theft they have not committed.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNjI2Y2Q5ZGEtOGUzZS00NjY3LWE0N2UtZGQzNmFlZjFkYjA3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UY209_CR6,0,140,209_AL_.jpg"
  },
  {
      "id": 14,
      "title": "Thani Oruvan",
      "year": "2015",
      "duration": "160",
      "rating": "6",
      "genres": "Action | Crime | Thriller",
      "director": "Mohan Raja",
      "cast": "Jayam Ravi | Arvind Swamy | Nayanthara | Nassar",
      "summary": "Siddharth Abimanyu, an influential scientist, is involved in various illegal medical practices. Mithran, an efficient IPS officer, decides to expose him.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYTc0ODgyODMtYTU3OS00NDcxLWI3YmYtZGVjMWQxOGI2ODZiXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR13,0,140,209_AL_.jpg"
  },
  {
      "id": 15,
      "title": "The Unvanquished",
      "year": "1956",
      "duration": "110",
      "rating": "Rate",
      "genres": "Drama",
      "director": "Satyajit Ray",
      "cast": "Pinaki Sengupta | Smaran Ghosal | Kamala Adhikari | Rani Bala",
      "summary": "Following his father's death, a boy leaves home to study in Calcutta, while his mother must face a life alone.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMjFjODk1NjUtNzk3NS00MDQ3LTg2ZmMtN2ZlNzdjMWY4YjE5XkEyXkFqcGdeQXVyNzMwODE5MTc@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 16,
      "title": "Asuran",
      "year": "2019",
      "duration": "141",
      "rating": "7",
      "genres": "Action | Drama",
      "director": "Vetrimaaran",
      "cast": "Dhanush | Manju Warrier | Prakash Raj | Pasupathy",
      "summary": "The teenage son of a farmer from an underprivileged caste kills a rich, upper caste landlord. How the pacifist farmer saves his hot-blooded son is the rest of the story.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BZTgzNTRkYWEtYWJmOC00NjMzLWFlMWEtMWRiNmFlMjBiOTI1XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UY209_CR2,0,140,209_AL_.jpg"
  },
  {
      "id": 17,
      "title": "Vada Chennai",
      "year": "2018",
      "duration": "164",
      "rating": "Rate",
      "genres": "Action | Crime | Drama",
      "director": "Vetrimaaran",
      "cast": "Dhanush | Ameer Sultan | Radha Ravi | Daniel Balaji",
      "summary": "A young carrom player in north Chennai becomes a reluctant participant in a war between two warring gangsters.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BZjhkYTU2YTgtM2ZkYS00MzJkLWE2ZjAtZjY5MTI4OWE2YmZjXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UY209_CR7,0,140,209_AL_.jpg"
  },
  {
      "id": 18,
      "title": "Kannathil Muthamittal",
      "year": "2002",
      "duration": "136",
      "rating": "8",
      "genres": "Action | Drama | War",
      "director": "Mani Ratnam",
      "cast": "Keerthana Parthiepan | Simran | Madhavan | Nandita Das",
      "summary": "A little girl is told by her parents that she is adopted. Determined to find her real mother, she begs to be taken to Sri Lanka, where her mother works with a militant group of activists.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYWRkNTRiYmMtNzM5Yi00OGNmLWE2YWItMTUwNDVmYzg0ZWUyXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UY209_CR4,0,140,209_AL_.jpg"
  },
  {
      "id": 19,
      "title": "Kaithi",
      "year": "2019",
      "duration": "145",
      "rating": "Rate",
      "genres": "Action | Crime | Drama",
      "director": "Lokesh Kanagaraj",
      "cast": "Karthi | Narain | Arjun Das | George Maryan",
      "summary": "Dilli, an ex-convict, endeavours to meet his daughter for the first time after leaving prison. However, his attempts are interrupted due to a drug raid planned by Inspector Bejoy.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BZTVlNGY2YTEtNTlmYy00NzY0LWE1NWUtOGJiNTgxZGM4ZmMzXkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_UY209_CR8,0,140,209_AL_.jpg"
  },
  {
      "id": 20,
      "title": "Dhuruvangal Pathinaaru",
      "year": "2016",
      "duration": "105",
      "rating": "9",
      "genres": "Crime | Drama | Mystery",
      "director": "Karthick Naren",
      "cast": "Rahman | Prakash Raghavan | Sharathkumar | Santhosh Krishna",
      "summary": "A police officer retires after an accident during a case investigation. Years later, he is forced to relive the past as he narrates the story to his friend's son.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BN2Y3ZTE4MzAtZTk3Zi00ZjJjLWJkMDgtOTRkZGRiYmU4YjA0XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 21,
      "title": "Peranbu",
      "year": "2018",
      "duration": "147",
      "rating": "Rate",
      "genres": "Drama | Family",
      "director": "Ram",
      "cast": "Mammootty | Sadhana | Anjali | Anjali Ameer",
      "summary": "A single father tries to raise his daughter, who has cerebral palsy, even as she is beginning to wake up to her sexuality.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYWQ3NzA5MTQtYTBmYy00N2FkLTgzY2YtNGFkY2FjZTI4Njc3XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR4,0,140,209_AL_.jpg"
  },
  {
      "id": 22,
      "title": "Premam",
      "year": "2015",
      "duration": "156",
      "rating": "10",
      "genres": "Comedy | Drama | Romance",
      "director": "Alphonse Puthren",
      "cast": "Nivin Pauly | Sai Pallavi | Madonna Sebastian | S.V. Krishna Shankar",
      "summary": "A young man has three opportunities to find love. Will the third time be the charm?",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMzJhNjMyOGMtYjhiYy00ZTAwLThmZWUtZmE5NzI3OTk4Y2M4XkEyXkFqcGdeQXVyMzQ5Njc3NzU@._V1_UY209_CR8,0,140,209_AL_.jpg"
  },
  {
      "id": 23,
      "title": "Soodhu Kavvum",
      "year": "2013",
      "duration": "135",
      "rating": "Rate",
      "genres": "Comedy | Crime | Thriller",
      "director": "Nalan Kumarasamy",
      "cast": "Vijay Sethupathi | Sanchita Shetty | Radha Ravi | M.S. Bhaskar",
      "summary": "Das, with his team, kidnap Arumai, son of a politician, who has been planning his own kidnapping to extract money from his father. Problems arise, when an insane cop is brought to handle the case.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BZjgyOTg3ZDQtYjNiOC00OTVlLTg3MWYtM2ViMjM5YTI3ZmQ5XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR3,0,140,209_AL_.jpg"
  },
  {
      "id": 24,
      "title": "Bangalore Days",
      "year": "2014",
      "duration": "171",
      "rating": "8.6",
      "genres": "Comedy | Drama | Romance",
      "director": "Anjali Menon",
      "cast": "Dulquer Salmaan | Nivin Pauly | Nazriya Nazim | Fahadh Faasil",
      "summary": "A fun roller coaster ride about three young people, Aju, Divya and Kuttan who are cousins, reach Bangalore to dream, discover and explore.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BZmY5NjNjYWMtNmJhNi00YTk0LTg0OWUtNDE4OGQ0YmM4NDAwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR8,0,140,209_AL_.jpg"
  },
  {
      "id": 25,
      "title": "Jigarthanda",
      "year": "2014",
      "duration": "171",
      "rating": "0",
      "genres": "Action | Comedy | Crime",
      "director": "Karthik Subbaraj",
      "cast": "Siddharth | Bobby Simha | Lakshmi Menon | Nassar",
      "summary": "An aspiring director targets a ruthless gangster because he wants to make a violent gangster film. His discreet attempts to research the gangster fail miserably. Finally when he gets caught snooping, things hit the fan.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BM2ViNmE5MGYtMTRiMS00YmU2LWIwYzItZWQzZTU5YjdhZmJjXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 26,
      "title": "Mahanati",
      "year": "2018",
      "duration": "177",
      "rating": "Rate",
      "genres": "Biography | Drama",
      "director": "Nag Ashwin",
      "cast": "Keerthy Suresh | Dulquer Salmaan | Samantha Ruth Prabhu | Vijay Deverakonda",
      "summary": "Biography of Savitri, an actress from South India movie industry, who ruled the industry for two decades during 50s and 60s.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMmNkN2ZkODgtZTU1Zi00MDg3LWE1MGQtM2ZmY2Y3ODcwZmE5XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 27,
      "title": "Super Deluxe",
      "year": "2019",
      "duration": "176",
      "rating": "1",
      "genres": "Comedy | Crime | Drama",
      "director": "Thiagarajan Kumararaja",
      "cast": "Vijay Sethupathi | Fahadh Faasil | Samantha Ruth Prabhu | Ramya Krishnan",
      "summary": "An unfaithful newly-wed wife, an estranged father, a priest and an angry son suddenly find themselves in the most unexpected predicaments, each poised to experience their destiny, all on one fateful day.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYjNkNDEzNDctYTk0Mi00NzNlLWEyZGItMmYzMGE4MzcyYzU3XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR17,0,140,209_AL_.jpg"
  },
  {
      "id": 28,
      "title": "Anniyan",
      "year": "2005",
      "duration": "181",
      "rating": "Rate",
      "genres": "Action | Crime | Drama",
      "director": "S. Shankar",
      "cast": "Vikram | Sada | Prakash Raj | Vivek",
      "summary": "Ramanujam, who suffers from multiple personality disorder, works as a lawyer by day and a vigilante at night, using tips from the 'Garuda Purana' as his tools to punish various antisocial elements.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYjA4MjEzYzAtOGIzMy00MDMxLWE1MDgtNjRhMDM0N2M1OTkzXkEyXkFqcGdeQXVyMTA5NjIyODcx._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 29,
      "title": "Mudhalvan",
      "year": "1999",
      "duration": "169",
      "rating": "2",
      "genres": "Action | Drama | Thriller",
      "director": "S. Shankar",
      "cast": "Arjun Sarja | Manisha Koirala | Raghuvaran | Vadivelu",
      "summary": "A man accepts a challenge to act as the Chief Minister of Tamil Nadu for one day only, and makes such a success of it that soon he is embroiled in political intrigue.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BODgxYjY0NGEtZjM1MS00YTAwLThkN2QtOTBkMWJhMmI5ZWY1XkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_UY209_CR7,0,140,209_AL_.jpg"
  },
  {
      "id": 30,
      "title": "Ustad Hotel",
      "year": "2012",
      "duration": "151",
      "rating": "Rate",
      "genres": "Comedy | Drama",
      "director": "Anwar Rasheed",
      "cast": "Dulquer Salmaan | Thilakan | Siddique | Nithya Menen",
      "summary": "Faisi wants to go to UK to become a professional chef but circumstances force him to assist his grandfather in a small restaurant in Kozhikode city, changing his outlook on life forever.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNWYzYjk3YzItNzBhMC00NmQwLTk0MmUtNzU5MWNmNDI2Mzg0XkEyXkFqcGdeQXVyODE0NjUxNzY@._V1_UY209_CR8,0,140,209_AL_.jpg"
  },
  {
      "id": 31,
      "title": "Sairat",
      "year": "2016",
      "duration": "174",
      "rating": "3",
      "genres": "Drama | Romance",
      "director": "Nagraj Manjule",
      "cast": "Rinku Rajguru | Akash Thosar | Arbaz Shaikh | Tanaji Galgunde",
      "summary": "In interior Maharashtra, a fisherman's son and a local politician's daughter fall in love against the restrictions of caste hierarchy.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMjBjNWYyY2UtOGNjZC00MTg4LWIwYWItYmZiNDI5MGUwNWRkXkEyXkFqcGdeQXVyNjI1NjA5NjE@._V1_UY209_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 32,
      "title": "Roja",
      "year": "1992",
      "duration": "137",
      "rating": "Rate",
      "genres": "Drama | Romance | Thriller",
      "director": "Mani Ratnam",
      "cast": "Arvind Swamy | Madhoo | Pankaj Kapur | Nassar",
      "summary": "A woman from a village in Tamil Nadu marries a sophisticated city dweller and moves with him to Kashmir, where all is rosy - until he gets kidnapped by militants.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMTBlZTk1YTMtZTQ2Ni00YzhkLWJiNDEtNWI2NjE0M2I4ZmYzXkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 33,
      "title": "Theeran Adhigaaram Ondru",
      "year": "2017",
      "duration": "157",
      "rating": "4",
      "genres": "Action | Crime | Thriller",
      "director": "H. Vinoth",
      "cast": "Karthi | Rakul Preet Singh | Abhimanyu Singh | Bose Venkat",
      "summary": "Theeran, a police officer, is entrusted with the task to solve the mystery behind a series of murders. The only clue left behind is that all the murders are committed in the same pattern.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNTAxOTBlZWMtMDdmMi00ZWE2LWI3YTUtNDM4OGM2NDkzMDU5XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR5,0,140,209_AL_.jpg"
  },
  {
      "id": 34,
      "title": "Maheshinte Prathikaaram",
      "year": "2016",
      "duration": "120",
      "rating": "Rate",
      "genres": "Comedy | Drama | Thriller",
      "director": "Dileesh Pothan",
      "cast": "Fahadh Faasil | Aparna Balamurali | Soubin Shahir | Alencier Ley Lopez",
      "summary": "Mahesh, a studio photographer and studio owner gets into a fight and loses. He ends up taking revenge which leads to certain realizations in his life.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BY2VkNjRlZTQtZWYyMy00ZWE2LTgyYzEtOGRiMzVhZTY0NTRlXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_UY209_CR8,0,140,209_AL_.jpg"
  },
  {
      "id": 35,
      "title": "Baashha",
      "year": "1995",
      "duration": "145",
      "rating": "5",
      "genres": "Action | Crime | Drama",
      "director": "Suresh Krishna",
      "cast": "Rajinikanth | Nagma | Raghuvaran | Vijayakumar",
      "summary": "An auto driver, Manikam, desperately tries to hide his dark underworld side to keep his promise to his father.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMjI3ZDJiZjEtYjUzOS00YzZlLWJkZjctMDU4YzNhNjJhMzI4XkEyXkFqcGdeQXVyOTA0NTIzNzU@._V1_UY209_CR10,0,140,209_AL_.jpg"
  },
  {
      "id": 36,
      "title": "Bombay",
      "year": "1995",
      "duration": "130",
      "rating": "Rate",
      "genres": "Drama | Romance",
      "director": "Mani Ratnam",
      "cast": "Arvind Swamy | Manisha Koirala | Nassar | Kitty",
      "summary": "A Hindu man and a Muslim woman fall in love in a small village and move to Mumbai, where they have two children. However, growing religious tensions and erupting riots threaten to tear the family apart.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYTczNDcyNzctZGVjYS00NGNmLWFkYzAtNWVjNTk3NjM3MzhjXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 37,
      "title": "Bommarillu",
      "year": "2006",
      "duration": "170",
      "rating": "6",
      "genres": "Comedy | Drama | Romance",
      "director": "Bommarillu Baskar",
      "cast": "Siddharth | Genelia Deshmukh | Prakash Raj | Kota Srinivasa Rao",
      "summary": "A young man realizes that he has to push back against his domineering father if he wants to find true happiness and love.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMGE5YzNlMDAtZjMxYS00NDkyLTk3YWMtY2Y3ODJjOTJkM2MyXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR4,0,140,209_AL_.jpg"
  },
  {
      "id": 38,
      "title": "Lucia",
      "year": "I) (2013",
      "duration": "135",
      "rating": "Rate",
      "genres": "Drama | Sci-Fi | Thriller",
      "director": "Pawan Kumar",
      "cast": "Sathish Neenasam | Sruthi Hariharan | Achyuth Kumar | Sabreen Baker",
      "summary": "A man suffering from insomnia is tricked into buying a drug, Lucia, that makes his desires come true in his dreams, blurring the line between fantasy and reality.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMTQyMDA5ODkzN15BMl5BanBnXkFtZTgwMjIzMDkyMDE@._V1_UY209_CR1,0,140,209_AL_.jpg"
  },
  {
      "id": 39,
      "title": "Indian",
      "year": "1996",
      "duration": "185",
      "rating": "7",
      "genres": "Action | Drama | Thriller",
      "director": "S. Shankar",
      "cast": "Kamal Haasan | Sukanya | Manisha Koirala | Urmila Matondkar",
      "summary": "A veteran freedom fighter enraged with the rising crime and corruption in the society murders all the wrong doers one by one using an ancient martial arts technique.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BZTljMzVhNzgtMGMzNi00MmUwLTgzYmQtOWIzY2VjMGRkMjM4XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR10,0,140,209_AL_.jpg"
  },
  {
      "id": 40,
      "title": "Athadu",
      "year": "2005",
      "duration": "172",
      "rating": "Rate",
      "genres": "Action | Crime | Drama",
      "director": "Trivikram Srinivas",
      "cast": "Mahesh Babu | Trisha Krishnan | Sonu Sood | Prakash Raj",
      "summary": "A gunman for hire is framed for murder, and assumes a dead man's identity while hiding from the police.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMDU4MDQ3YWItY2ViMy00NTM5LTg0NjQtMWIxN2ExZmU0ZTE0XkEyXkFqcGdeQXVyMjMyNjkwMTY@._V1_UY209_CR8,0,140,209_AL_.jpg"
  },
  {
      "id": 41,
      "title": "Arjun Reddy",
      "year": "2017",
      "duration": "182",
      "rating": "8",
      "genres": "Action | Drama | Romance",
      "director": "Sandeep Reddy Vanga",
      "cast": "Vijay Deverakonda | Shalini Pandey | Jia Sharma | Kanchana",
      "summary": "Arjun Reddy, a short-tempered house surgeon, gets used to drugs and drinks when his girlfriend is forced to marry another person.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNmY1OGJhMTQtNzA5NS00YmMxLTg3N2YtOTc2MGRjN2JlYzVmXkEyXkFqcGdeQXVyMTcyNDY1NDgw._V1_UY209_CR8,0,140,209_AL_.jpg"
  },
  {
      "id": 42,
      "title": "Ulidavaru Kandanthe",
      "year": "2014",
      "duration": "154",
      "rating": "Rate",
      "genres": "Crime | Drama | Thriller",
      "director": "Rakshit Shetty",
      "cast": "Rakshit Shetty | Rishab Shetty | Kishore Kumar G. | Achyuth Kumar",
      "summary": "A journalist sets out to uncover the truth behind an incident, through the perspectives of different people, unraveling how they and their lives are intertwined with it.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMTc3ODUxODg3MV5BMl5BanBnXkFtZTgwMDc0MDY4MTE@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 43,
      "title": "Pizza",
      "year": "II) (2012",
      "duration": "127",
      "rating": "9",
      "genres": "Horror | Thriller",
      "director": "Karthik Subbaraj",
      "cast": "Vijay Sethupathi | Ramya Nambeeshan | Aadukalam Naren | Karunakaran",
      "summary": "A pizza delivery boy lands in a mysterious circumstance and it works a dramatic change in his life.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BZGM2MWVlMDQtMmE4My00ODJlLTg5NmItYTY0MzUwODc3MGViXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR23,0,140,209_AL_.jpg"
  },
  {
      "id": 44,
      "title": "Vedam",
      "year": "2010",
      "duration": "135",
      "rating": "Rate",
      "genres": "Action | Drama",
      "director": "Radha Krishna Jagarlamudi",
      "cast": "Allu Arjun | Anushka Shetty | Manoj Kumar Manchu | Manoj Bajpayee",
      "summary": "Stories of 5 people, an educated slum dweller, an aspiring rock star, an old villager, a prostitute and an ostracized Muslim man; all lead up to a night in a hospital filled with jeopardy.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNmFmMTJiZGMtYWRjMC00ZDljLWJkZGUtYmRmMGJlYmI5MTI3XkEyXkFqcGdeQXVyNjQ3ODkxMjE@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 45,
      "title": "Rangasthalam",
      "year": "2018",
      "duration": "170",
      "rating": "10",
      "genres": "Action | Drama",
      "director": "Sukumar",
      "cast": "Ram Charan | Samantha Ruth Prabhu | Aadhi | Jagapathi Babu",
      "summary": "Chitti Babu begins to suspect his elder brother's life is in danger after they team up to lock horns with their village president and overthrow his unlawful 30 year old regime.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMjQ1MjFkN2EtOTU4NS00NDkzLThhNzItODkzYWNjZDMxZjE0XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_UY209_CR3,0,140,209_AL_.jpg"
  },
  {
      "id": 46,
      "title": "Vaaranam Aayiram",
      "year": "2008",
      "duration": "169",
      "rating": "Rate",
      "genres": "Action | Drama | Musical",
      "director": "Gautham Vasudev Menon",
      "cast": "Suriya | Simran | Ramya | Sameera Reddy",
      "summary": "A father and son help each other through growing up, romance, tragedy, and adventure.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BZTViZTUxNzQtNzMxMi00NWY2LTkxZDctNGE5NzcxN2M5M2M2XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR27,0,140,209_AL_.jpg"
  },
  {
      "id": 47,
      "title": "Baahubali: The Beginning",
      "year": "2015",
      "duration": "159",
      "rating": "8.2",
      "genres": "Action | Drama",
      "director": "S.S. Rajamouli",
      "cast": "Prabhas | Rana Daggubati | Anushka Shetty | Tamannaah Bhatia",
      "summary": "A child from the Mahishmati kingdom is raised by tribal people and one day learns about his royal heritage, his father's bravery in battle and a mission to overthrow the incumbent ruler.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UY209_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 48,
      "title": "K.G.F",
      "year": "2018",
      "duration": "154",
      "rating": "0",
      "genres": "Action | Crime | Drama",
      "director": "Prashanth Neel",
      "cast": "Yash | Srinidhi Shetty | Ramachandra Raju | Archana Jois",
      "summary": "In the 1970s, a gangster named Rocky goes undercover as a slave to assassinate the owner of a notorious gold mine known as the Kolar Gold Fields.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BZDNlNzBjMGUtYTA0Yy00OTI2LWJmZjMtODliYmUyYTI0OGFmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 49,
      "title": "Vettaiyaadu Vilaiyaadu",
      "year": "2006",
      "duration": "174",
      "rating": "Rate",
      "genres": "Action | Crime | Drama",
      "director": "Gautham Vasudev Menon",
      "cast": "Kamal Haasan | Jyotika | Prakash Raj | Daniel Balaji",
      "summary": "A Police Officer investigates a series of brutal rapes and murders, with the culprits seeming to cover more than one country.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BOWY1Nzc4NDItN2ZjMC00NDY3LTkyMjctZDk5N2ZkYTQ2OGMxXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_UY209_CR12,0,140,209_AL_.jpg"
  },
  {
      "id": 50,
      "title": "Baahubali 2: The Conclusion",
      "year": "2017",
      "duration": "167",
      "rating": "1",
      "genres": "Action | Drama",
      "director": "S.S. Rajamouli",
      "cast": "Prabhas | Rana Daggubati | Anushka Shetty | Tamannaah Bhatia",
      "summary": "Amarendra Baahubali, the heir apparent to the throne of Mahishmati, finds his life and relationships endangered as his adoptive brother Bhallaladeva conspires to claim the throne.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMjNhM2UxMTEtYTgzNi00YmM0LWI5ZTAtMmZjYjM1NDIwMTgxXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UY209_CR3,0,140,209_AL_.jpg"
  },
  {
      "id": 51,
      "title": "Manam",
      "year": "I) (2014",
      "duration": "163",
      "rating": "Rate",
      "genres": "Comedy | Drama | Fantasy",
      "director": "Vikram K. Kumar",
      "cast": "Akkineni Nageswara Rao | Nagarjuna Akkineni | Naga Chaitanya Akkineni | Samantha Ruth Prabhu",
      "summary": "Through reincarnation, family members are able to cross generations and meddle in each others' lives.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYjlmMDUzMzQtYzY4OC00NGYwLWI1MmItMGIyYTk0NDFlMWZmXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_UY209_CR4,0,140,209_AL_.jpg"
  },
  {
      "id": 52,
      "title": "Hey Ram",
      "year": "2000",
      "duration": "186",
      "rating": "2",
      "genres": "Crime | Drama | History",
      "director": "Kamal Haasan",
      "cast": "Kamal Haasan | Shah Rukh Khan | Rani Mukerji | Hema Malini",
      "summary": "Saketh Ram's wife is raped and killed during direct action day riots in Calcutta. He is convinced that Mahatma Gandhi is responsible for all the problems happening in the country and sets out to kill him.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYzMxYzZjMDUtZjI3Ni00Y2M2LTllYWItNzJmZTJjMzkyYjlmXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 53,
      "title": "Okkadu",
      "year": "2003",
      "duration": "171",
      "rating": "Rate",
      "genres": "Action | Drama | Romance",
      "director": "Gunasekhar",
      "cast": "Mahesh Babu | Bhoomika Chawla | Prakash Raj | Mukesh Rishi",
      "summary": "A Kabbadi player rescues a young woman from an unwanted marriage and hides her in his home.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNjE4NWY1YWMtM2U4ZS00NjdjLThhZDAtZWQ0NmVlZDE0NTNjXkEyXkFqcGdeQXVyMzc5Nzk1NDY@._V1_UY209_CR29,0,140,209_AL_.jpg"
  },
  {
      "id": 54,
      "title": "Charlie",
      "year": "VII) (2015",
      "duration": "130",
      "rating": "3",
      "genres": "Adventure | Drama | Romance",
      "director": "Martin Prakkat",
      "cast": "Dulquer Salmaan | Parvathy Thiruvothu | Aparna Gopinath | Nedumudi Venu",
      "summary": "A young, nonconforming woman named Tessa gets entangled in a cat-and-mouse chase in the by-lanes of Kerala, hunting for a mysterious artist who previously lived in her apartment.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMmZhMzVlNzEtMjQ3ZS00ZGJlLTk4N2YtMDIyNDNmZThhMGVmXkEyXkFqcGdeQXVyMzIyNDI4NjU@._V1_UY209_CR1,0,140,209_AL_.jpg"
  },
  {
      "id": 55,
      "title": "Pokiri",
      "year": "2006",
      "duration": "164",
      "rating": "Rate",
      "genres": "Action | Crime | Thriller",
      "director": "Puri Jagannadh",
      "cast": "Mahesh Babu | Ileana D'Cruz | Prakash Raj | Nassar",
      "summary": "A money-minded criminal has to deal with two rival gangs as well as an evil cop threatening his girlfriend.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BOWNkMWQ3MDEtYjQ3Zi00Y2NhLWE1NzYtZGJkM2NlYWY3OWFmXkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 56,
      "title": "Samsara",
      "year": "2001",
      "duration": "138",
      "rating": "4",
      "genres": "Adventure | Drama | Romance",
      "director": "Pan Nalin",
      "cast": "Shawn Ku | Christy Chung | Neelesha Barthel | Lhakpa Tsering",
      "summary": "A spiritual love-story set in the majestic landscape of Ladakh, Himalayas. Samsara is a quest; one man's struggle to find spiritual Enlightenment by renouncing the world. And one woman's ...                See full summary\u00a0\u00bb",
      "img_link": "https://m.media-amazon.com/images/M/MV5BODhhOTY0ZGQtMGIzZi00ZTUyLWIwYjctMGVhODZiZTM1MWE2XkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 57,
      "title": "RangiTaranga",
      "year": "2015",
      "duration": "149",
      "rating": "Rate",
      "genres": "Mystery | Thriller",
      "director": "Anup Bhandari",
      "cast": "Nirup Bhandari | Radhika Narayan | Avantika Shetty | Sai Kumar",
      "summary": "Mysterious events begin to unfold after a reclusive novelist and his wife move back to her ancestral village, followed by a journalist.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMTAzNjAwNDEwMTNeQTJeQWpwZ15BbWU4MDk5MjMyMzYx._V1_UY209_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 58,
      "title": "Eega",
      "year": "2012",
      "duration": "145",
      "rating": "5",
      "genres": "Action | Comedy | Drama",
      "director": "S.S. Rajamouli",
      "cast": "Sudeep | Nani | Samantha Ruth Prabhu | Hamsa Nandini",
      "summary": "A murdered man is reincarnated as a housefly and seeks to avenge his death.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNDY3MjhmZmYtMzFmZC00ZGRiLTg5ZTItOGExZmE4YmQzZDQyXkEyXkFqcGdeQXVyMTcyNDY1NDgw._V1_UY209_CR8,0,140,209_AL_.jpg"
  },
  {
      "id": 59,
      "title": "Intelligent Khiladi",
      "year": "2018",
      "duration": "147",
      "rating": "Rate",
      "genres": "Action | Thriller",
      "director": "Sashi Kiran Tikka",
      "cast": "Adivi Sesh | Sobhita Dhulipala | Jagapathi Babu | Prakash Raj",
      "summary": "A young NSA agent is framed for the murder of his bosses making him realize that now his mission is darker than expected and has some personal scores to settle regarding his father's death, a former NSA agent.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BOWQwNWRlNmUtY2FkZC00YmQ3LTlkNzUtOTUyZmExMDNkYjE2XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 60,
      "title": "24",
      "year": "I) (2016",
      "duration": "164",
      "rating": "6",
      "genres": "Action | Comedy | Drama",
      "director": "Vikram Kumar",
      "cast": "Suriya | Samantha Ruth Prabhu | Nithya Menen | Saranya Ponvannan",
      "summary": "A scientist invents a time machine, which leads to a bitter battle between his evil twin brother and his son.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BOTIxZTQwN2QtOTVmNS00ZDRiLTlhOGEtZGQ1MmJlZDQzODk0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UY209_CR6,0,140,209_AL_.jpg"
  },
  {
      "id": 61,
      "title": "Magadheera",
      "year": "2009",
      "duration": "147",
      "rating": "Rate",
      "genres": "Action | Drama | Fantasy",
      "director": "S.S. Rajamouli",
      "cast": "Ram Charan | Kajal Aggarwal | Dev Gill | Srihari",
      "summary": "A warrior gets reincarnated 400 years later, after trying to save the princess and the kingdom, who also dies along with him. He then sets back again to fight against all odds and win back his love.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNDRkNmNiYTYtYjIxNi00MjQyLThlZWQtYmU0NDMxNDE0NWYzXkEyXkFqcGdeQXVyODMyODMxNDY@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 62,
      "title": "Thuppakki",
      "year": "2012",
      "duration": "165",
      "rating": "7",
      "genres": "Action | Thriller",
      "director": "A.R. Murugadoss",
      "cast": "Joseph Vijay | Kajal Aggarwal | Vidyut Jammwal | Sathyan",
      "summary": "An army captain is on a mission to track down and destroy a terrorist gang and deactivate the sleeper cells under its command.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYmNmNzBjYTQtYzU1YS00NmMyLWJkNDUtNGY0NmI0OTQzMTM2XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR7,0,140,209_AL_.jpg"
  },
  {
      "id": 63,
      "title": "Irudhi Suttru",
      "year": "2016",
      "duration": "109",
      "rating": "Rate",
      "genres": "Action | Drama | Sport",
      "director": "Sudha Kongara",
      "cast": "Madhavan | Nassar | Radha Ravi | Kaali Venkat",
      "summary": "The story of a former boxer who quits boxing following a fallout with the authorities over the underlying politics but goes on to coach a fisherwoman to fulfill his dream through her.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYWRiMDQxYzUtMGU5Yy00Y2E4LWExZGUtYmZjZWJlMTgyZmYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR2,0,140,209_AL_.jpg"
  },
  {
      "id": 64,
      "title": "Kaththi",
      "year": "2014",
      "duration": "166",
      "rating": "8",
      "genres": "Action | Drama",
      "director": "A.R. Murugadoss",
      "cast": "Joseph Vijay | Samantha Ruth Prabhu | Neil Nitin Mukesh | Tota Roy Chowdhury",
      "summary": "A case of mistaken identity embroils an escaped convict in a fight against a large corporation intent on seizing a village's land.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMGZiMmJhZWUtMDZiNy00ZTE4LWJhNTUtMTlkYzNhODJmMDFkXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR3,0,140,209_AL_.jpg"
  },
  {
      "id": 65,
      "title": "1: Nenokkadine",
      "year": "2014",
      "duration": "170",
      "rating": "Rate",
      "genres": "Action | Thriller",
      "director": "Sukumar",
      "cast": "Mahesh Babu | Kriti Sanon | Nassar | Pradeep Singh Rawat",
      "summary": "A rock star must overcome his psychological inhibitions to seek revenge for his parents' death.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNzcwMzkwODE1NF5BMl5BanBnXkFtZTgwNzA1NzAwMTE@._V1_UY209_CR2,0,140,209_AL_.jpg"
  },
  {
      "id": 66,
      "title": "Ghilli",
      "year": "2004",
      "duration": "160",
      "rating": "9",
      "genres": "Action | Drama | Romance",
      "director": "Dharani",
      "cast": "Joseph Vijay | Trisha Krishnan | Prakash Raj | Ashish Vidyarthi",
      "summary": "Velu, an aspiring kabaddi player, goes to Madurai to participate in a regional match, where he rescues Dhanalakshmi from Muthupandi, a powerful man keen on marrying the girl against her will.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BOGI3MTQ5MDUtNGJhMi00NDY1LWE2MDItODRlMGNkMWVmY2MwXkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 67,
      "title": "Ghajini",
      "year": "2005",
      "duration": "175",
      "rating": "Rate",
      "genres": "Action | Drama | Mystery",
      "director": "A.R. Murugadoss",
      "cast": "Suriya | Asin Thottumkal | Nayanthara | Pradeep Singh Rawat",
      "summary": "Sanjay Ramaswamy, who is suffering from short-term memory loss, sets out on a quest to find and eliminate the people responsible for his ladylove Kalpana's murder.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNjcyNjdkNmYtZWQyZS00NjRjLTk4YzktYWQ4N2U4MDYwMmNmXkEyXkFqcGdeQXVyMTYyNjAzOTUx._V1_UY209_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 68,
      "title": "Geetha Govindam",
      "year": "2018",
      "duration": "142",
      "rating": "10",
      "genres": "Comedy | Drama | Romance",
      "director": "Parasuram",
      "cast": "Vijay Deverakonda | Rashmika Mandanna | Subbaraju | Mouryaani",
      "summary": "An innocent young lecturer is misunderstood as a pervert and despised by a woman who co-incidentally turns out to be the younger sister of his brother-in-law. Eventually differences subside and love blooms between them.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BZmM3ZjNiMGMtMTc2NS00OTQ5LWI2MzItY2Q0Yjg1Y2I5MTZlXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 69,
      "title": "Sivaji",
      "year": "2007",
      "duration": "188",
      "rating": "Rate",
      "genres": "Action | Crime | Drama",
      "director": "S. Shankar",
      "cast": "Rajinikanth | Shriya Saran | Suman | Vivek",
      "summary": "A software engineer comes to India in order to serve the nation and invest in its welfare. A few corrupt officials and politicians try to stop him while he tries to do good for the poor.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BZTU2NzRlNmQtN2Q1Yi00MWJkLWEwNTUtODkyODQzYTE1YTUwXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_UY209_CR22,0,140,209_AL_.jpg"
  },
  {
      "id": 70,
      "title": "Mankatha",
      "year": "2011",
      "duration": "155",
      "rating": "8.2",
      "genres": "Action | Crime | Thriller",
      "director": "Venkat Prabhu",
      "cast": "Ajith Kumar | Arjun Sarja | Trisha Krishnan | Premgi Amaren",
      "summary": "Vinayak, a suspended cop, helps a group of four men rob cricket betting money amounting to 500 crores INR. When it comes to splitting the amount, betrayal hits the team hard and a chase ensues.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BZjEwYjkxZGEtMjZlMy00MDZhLTk0MWYtNDY0NTZiNmZkM2Q4XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR9,0,140,209_AL_.jpg"
  },
  {
      "id": 71,
      "title": "Khaleja",
      "year": "2010",
      "duration": "170",
      "rating": "0",
      "genres": "Action | Comedy | Fantasy",
      "director": "Trivikram Srinivas",
      "cast": "Mahesh Babu | Anushka Shetty | Prakash Raj | Brahmanandam",
      "summary": "When a mysterious illness ravages a remote village, the villagers embrace a reluctant taxi driver as their savior.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BOGNiMWU0NjgtNjIyMy00ZGRkLTkyNTMtMzRlNDY0YTNjZWI4XkEyXkFqcGdeQXVyMzc5Nzk1NDY@._V1_UY209_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 72,
      "title": "Kireedam",
      "year": "1989",
      "duration": "124",
      "rating": "Rate",
      "genres": "Action | Drama",
      "director": "Sibi Malayil",
      "cast": "Mohanlal | Thilakan | Kaviyoor Ponnamma | Parvathi",
      "summary": "The life of a young man turns upside down when he intervenes in a dispute in order to rescue his father (a cop) from a ruthless local outlaw.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BY2U2YmVjMmUtZjFhNS00YTBhLWFmOGYtYWRiYjBmZDkwMTU1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 73,
      "title": "Sandesham",
      "year": "1991",
      "duration": "138",
      "rating": "1",
      "genres": "Comedy | Drama",
      "director": "Sathyan Anthikad",
      "cast": "Sreenivasan | Jayaram | Thilakan | Maathu",
      "summary": "A satire on contemporary Kerala politics where brothers turn local leaders of rival parties, leading to distress for their aged and once-proud parents.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYmQ2YTFlMjktMGJhMC00ZmQ0LWJkNTQtMzlkODQ0NWUwZGViXkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_UY209_CR6,0,140,209_AL_.jpg"
  },
  {
      "id": 74,
      "title": "Nadodikattu",
      "year": "1987",
      "duration": "158",
      "rating": "Rate",
      "genres": "Comedy",
      "director": "Sathyan Anthikad",
      "cast": "Mohanlal | Sreenivasan | Shobana | Thilakan",
      "summary": "After losing their jobs in Kerala, Dasan and Vijayan decide to migrate to the Middle East. But they end up in Tamil Nadu where they are mistaken as two CID officers by a group of smugglers.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BN2IyYTExNmYtMjRhNC00MWFjLTllZDAtODRlZjA0MTgyZDc0XkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_UY209_CR9,0,140,209_AL_.jpg"
  },
  {
      "id": 75,
      "title": "Kumbalangi Nights",
      "year": "2019",
      "duration": "135",
      "rating": "2",
      "genres": "Comedy | Drama | Romance",
      "director": "Madhu C. Narayanan",
      "cast": "Shane Nigam | Soubin Shahir | Fahadh Faasil | Sreenath Bhasi",
      "summary": "The film revolves around four brothers who share a love-hate relationship with each other. Their relationship progresses to another level when Saji, Boney, and Franky decide to help Bobby stand by his love.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYjYyZTNkZGYtZGJjZC00NmM2LThjNjMtMjYxYTI0NTg1NzViXkEyXkFqcGdeQXVyMzQ5Njc3NzU@._V1_UY209_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 76,
      "title": "Devasuram",
      "year": "1993",
      "duration": "187",
      "rating": "Rate",
      "genres": "Action | Drama | Thriller",
      "director": "I.V. Sasi",
      "cast": "Mohanlal | Napolean | Revathi | Innocent Vareed Thekkethala",
      "summary": "Neelakandan squanders away the inheritance left by his father. However, his life turns upside down when his mother reveals a terrible secret on her deathbed that changes the course of his life.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNzY5ZTA3YWItMjYxZi00ZWFlLWEwN2ItZDBhMTFjNjYzNGM4XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR7,0,140,209_AL_.jpg"
  },
  {
      "id": 77,
      "title": "Chithram",
      "year": "1988",
      "duration": "159",
      "rating": "3",
      "genres": "Comedy | Drama | Musical",
      "director": "Priyadarshan",
      "cast": "Mohanlal | Nedumudi Venu | Renjini | Poornam Vishwanathan",
      "summary": "A woman hires a stranger to pose as her husband because she doesn't want her ailing father to know that her fiance broke their engagement.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNGE3OGUxMTctMDdhOC00OTFjLWIxYjQtNTJjYjNhMmM4ZTEyXkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_UY209_CR3,0,140,209_AL_.jpg"
  },
  {
      "id": 78,
      "title": "Spadikam",
      "year": "1995",
      "duration": "150",
      "rating": "Rate",
      "genres": "Action | Drama",
      "director": "Bhadran",
      "cast": "Mohanlal | Thilakan | Urvashi | Sphadikam George",
      "summary": "A small-town criminal constantly clashes with his strict school headmaster father at the expense of their family lives.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BY2Q5YmU0ODEtN2JhNy00ZjZhLWFhN2MtM2Q0ZGUwYzJjZmUyXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_UY209_CR13,0,140,209_AL_.jpg"
  },
  {
      "id": 79,
      "title": "In Harihar Nagar",
      "year": "1990",
      "duration": "133",
      "rating": "4",
      "genres": "Comedy | Crime | Mystery",
      "director": "Lal",
      "cast": "Mukesh | Siddique | Jagadish | Ashokan",
      "summary": "Four young men are enamored by Maya, their next-door neighbor. However, she is in town to investigate the mysterious circumstances surrounding the death of her brother.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNDA5NWZhODctNTE5ZS00NGFkLWFlMDUtYzM2MjY0MDJhZjIzXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_UY209_CR15,0,140,209_AL_.jpg"
  },
  {
      "id": 80,
      "title": "Kilukkam",
      "year": "1991",
      "duration": "155",
      "rating": "Rate",
      "genres": "Comedy",
      "director": "Priyadarshan",
      "cast": "Mohanlal | Jagathy Sreekumar | Revathi | Kollam Thulasi",
      "summary": "A tourist guide in Ooty shelters a mentally unstable woman in return for the reward offered by her relatives. Later, he comes to know that she is in danger from her relatives.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BZGU0NGVhZDctMDY5MC00MGQyLWIyMGMtZjFmMmIzMGYxY2Y2XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR7,0,140,209_AL_.jpg"
  },
  {
      "id": 81,
      "title": "Thoovanathumbikal",
      "year": "1987",
      "duration": "151",
      "rating": "5",
      "genres": "Drama | Romance",
      "director": "P. Padmarajan",
      "cast": "Mohanlal | Sumalatha | Parvathi | Ashokan",
      "summary": "Jayakrishnan falls in love with two girls, Radha and Clara, and fights his confusion about whom he should marry and spend his life with.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNjUyZGYwNGItYTVjYy00ZTgyLTkzMzItMmNmNWNhYWI4OTk1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR8,0,140,209_AL_.jpg"
  },
  {
      "id": 82,
      "title": "Godfather",
      "year": "1991",
      "duration": "150",
      "rating": "Rate",
      "genres": "Comedy | Drama | Romance",
      "director": "Lal",
      "cast": "N.N. Pillai | Mukesh | Philomina | Thilakan",
      "summary": "Since Anjooran hates women, his sons remain unmarried. However, everything changes when his youngest son, Ramabhadran, falls in love with Malu, whose grandmother is their family's biggest enemy.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYjI2YmJhMTUtYjEzYS00N2VmLTlmMzMtZGQ1MjZhNmY0ODdiXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 83,
      "title": "A Northern Story of Valour",
      "year": "1989",
      "duration": "168",
      "rating": "6",
      "genres": "Drama | History",
      "director": "T. Hariharan",
      "cast": "Mammootty | Madhavi | Devan | Suresh Gopi",
      "summary": "The film offers an alternative version of the fight between two legendary Chekavars from Chanthu's perspective.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BODNjOGNjZGMtYzUwYS00NTM1LTk1MTEtZjlhOTY2MTBhNDkxXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY209_CR1,0,140,209_AL_.jpg"
  },
  {
      "id": 84,
      "title": "Ramji Rao Speaking",
      "year": "1989",
      "duration": "150",
      "rating": "Rate",
      "genres": "Comedy | Drama | Thriller",
      "director": "Lal",
      "cast": "Saikumar | Mukesh | Innocent Vareed Thekkethala | Rekha",
      "summary": "Three unemployed men struggle to earn a living and decide to get involved in a kidnapping scheme to make quick money.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BZjg1NmI0MmUtMzkyMi00N2RjLThiYjAtMTk5NTM2ODE2MjhjXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR5,0,140,209_AL_.jpg"
  },
  {
      "id": 85,
      "title": "Yoddha",
      "year": "1992",
      "duration": "149",
      "rating": "7",
      "genres": "Action | Comedy | Drama",
      "director": "Sangeeth Sivan",
      "cast": "Mohanlal | Siddharth Lama | Madhoo | Jagathy Sreekumar",
      "summary": "Fate brings a young man from rural Kerala to be the protector of a young Lama in Nepal, who is being chased by a dangerous cult.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMzdiMWQ5YTgtZWM1NS00OWRmLWI3NmQtNjBkMmFhZTY3NTNlXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_UY209_CR1,0,140,209_AL_.jpg"
  },
  {
      "id": 86,
      "title": "Kaalapani",
      "year": "1996",
      "duration": "178",
      "rating": "Rate",
      "genres": "Action | Drama | History",
      "director": "Priyadarshan",
      "cast": "Mohanlal | Amrish Puri | Prabhu | Tabu",
      "summary": "Govardhan, a doctor by profession, is wrongly accused of bombing a train and is jailed by the British in Cellular Jail, also known as Kala Pani, in the Andaman and Nicobar Islands. He witnesses the sufferings of hundreds of Indian prisoners there.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BZWVjY2M4M2EtYzc4YS00YWM5LThjZTQtNzczNDE5ZDY2OGQwXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_UY209_CR7,0,140,209_AL_.jpg"
  },
  {
      "id": 87,
      "title": "Guru",
      "year": "1997",
      "duration": "136",
      "rating": "8",
      "genres": "Drama | Fantasy",
      "director": "Rajiv Anchal",
      "cast": "Mohanlal | Suresh Gopi | Madhupal | Kaveri",
      "summary": "Situations turn a man who believes in secularism into an extremist. He plots to bomb a monastery where the survivors of a riot take refuge.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BZTQ2NTE3OTktYjAxNC00YWMzLTk1OGUtOTAwNTY2ZTNlZTY3XkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_UY209_CR31,0,140,209_AL_.jpg"
  },
  {
      "id": 88,
      "title": "Bharatham",
      "year": "1991",
      "duration": "147",
      "rating": "Rate",
      "genres": "Drama | Musical",
      "director": "Sibi Malayil",
      "cast": "Mohanlal | Urvashi | Nedumudi Venu | Kaviyoor Ponnamma",
      "summary": "The tale of two classical musician brothers: while the elder squanders his life and talent away, the younger one fulfills their joint responsibilities towards their family.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMmE5NDg3ZmEtY2RkYy00Y2Y5LTk4NzQtNWJjZGJhZWQzZWM0XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_UY209_CR14,0,140,209_AL_.jpg"
  },
  {
      "id": 89,
      "title": "Thanmathra",
      "year": "2005",
      "duration": "160",
      "rating": "9",
      "genres": "Drama",
      "director": "Blessy",
      "cast": "Mohanlal | Meera Vasudevan | Arjun Lal | Nedumudi Venu",
      "summary": "Will an unexpected turn of events change Rameshan's life forever and prevent him from witnessing his dream where his son becomes a reputable IAS Officer?",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNjA3NDkzNmUtMzk5NS00OGZmLWEzNzEtMDU4NWUxZTI2MTYzXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_UY209_CR13,0,140,209_AL_.jpg"
  },
  {
      "id": 90,
      "title": "Pranchiyettan and the Saint",
      "year": "2010",
      "duration": "140",
      "rating": "Rate",
      "genres": "Comedy | Drama",
      "director": "Ranjith",
      "cast": "Mammootty | Priyamani | Jesse Fox Allen | Innocent Vareed Thekkethala",
      "summary": "Pranchiyettan is a successful businessman who often has talks with an imaginary St. Francis of Assisi. The story deals with how he goes about changing his embarrassing image to making a name for himself using wealth and contacts.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMDg3ZjUxMDMtNmM2OC00MzNlLWEyMTgtMTI1Njk0OTdkMjZkXkEyXkFqcGdeQXVyNTI0NzYwMzE@._V1_UX140_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 91,
      "title": "Take Off",
      "year": "2017",
      "duration": "139",
      "rating": "10",
      "genres": "Action | Drama | Thriller",
      "director": "Mahesh Narayanan",
      "cast": "Parvathy Thiruvothu | Fahadh Faasil | Kunchacko Boban | Prakash Belawadi",
      "summary": "In 2014, a group of Malayali nurses was captured when terrorists took over the city of Tikrit in Iraq. This movie recounts the ordeal suffered by the nurses following their capture.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNjY4ZjgzNGMtZjg2OC00ODM2LTlmMzktNWNiNTNiYjQzOThiXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_UY209_CR1,0,140,209_AL_.jpg"
  },
  {
      "id": 92,
      "title": "Namukku Parkkan Munthiri Thoppukal",
      "year": "1986",
      "duration": "137",
      "rating": "Rate",
      "genres": "Romance",
      "director": "P. Padmarajan",
      "cast": "Mohanlal | Shari | Thilakan | Vineeth",
      "summary": "A man falls in love with his new neighbor but then finds that her family life is difficult.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BY2M0ZTk3ZTEtOTlkZi00NWU2LTkzM2QtNjBlMzgzZDU4MDJlXkEyXkFqcGdeQXVyNTI0NzYwMTI@._V1_UY209_CR6,0,140,209_AL_.jpg"
  },
  {
      "id": 93,
      "title": "Thaniyavartanam",
      "year": "1987",
      "duration": "119",
      "rating": "8.3",
      "genres": "Drama",
      "director": "Sibi Malayil",
      "cast": "Mammootty | Thilakan | Mukesh | Kaviyoor Ponnamma",
      "summary": "A school teacher living in a village belongs to a family with a history of lunatic males, and soon he falls prey despite being normal due to society misinterpreting his actions.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMjBiZjI1ZTItZWI5MS00ZTA5LWFhOTEtYzUxOTYwNTc1ZjI4XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_UY209_CR1,0,140,209_AL_.jpg"
  },
  {
      "id": 94,
      "title": "Thondi Muthalum Driksakshiyum",
      "year": "2017",
      "duration": "135",
      "rating": "0",
      "genres": "Crime | Drama | Thriller",
      "director": "Dileesh Pothan",
      "cast": "Fahadh Faasil | Suraj Venjaramoodu | Nimisha Sajayan | Alencier Ley Lopez",
      "summary": "Prasad and Sreeja enter wedlock and move to a new place to continue the rest of their lives. Unfortunate events begin to take place after Prasad, a small-time thief, robs Sreeja's gold chain during a bus journey.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYzUwM2M0NGYtMDVkZS00OWIyLWIzYmYtZGU1MmU4MWM0ZjU2XkEyXkFqcGdeQXVyODE0NjUxNzY@._V1_UY209_CR4,0,140,209_AL_.jpg"
  },
  {
      "id": 95,
      "title": "Vadakkunokkiyantram",
      "year": "1989",
      "duration": "120",
      "rating": "Rate",
      "genres": "Comedy | Drama",
      "director": "Sreenivasan",
      "cast": "Sreenivasan | Parvathi | Innocent Vareed Thekkethala | K.P.A.C. Lalitha",
      "summary": "A man with a serious case of inferiority complex is married to a beautiful girl. Soon, his love and care turns into suspicion.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BYmY4NzQ4MTktYTA5NS00ZjBkLTgxZjktZmFmZmJmZDM1ZTNkXkEyXkFqcGdeQXVyMzQ5Njc3NzU@._V1_UY209_CR5,0,140,209_AL_.jpg"
  },
  {
      "id": 96,
      "title": "Android Kunjappan Version 5.25",
      "year": "2019",
      "duration": "140",
      "rating": "1",
      "genres": "Comedy | Drama | Sci-Fi",
      "director": "Ratheesh Balakrishnan Poduval",
      "cast": "Soubin Shahir | Suraj Venjaramoodu | Kendy Zirdo | Saiju Kurup",
      "summary": "Story of a conventional, conservative small town villager and his son who has to move away from home due to his profession. Their relationship gets an endearing twist when an AI humanoid enters their lives and fills in their emptiness.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMzI2ZDJjYTYtNTI0MC00ZTY1LWJkNzYtMmU2OTk1MWJhYzQzXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_UY209_CR0,0,140,209_AL_.jpg"
  },
  {
      "id": 97,
      "title": "Pathemari",
      "year": "2015",
      "duration": "118",
      "rating": "Rate",
      "genres": "Drama",
      "director": "Salim Ahmed",
      "cast": "Mammootty | Sreenivasan | Jewel Mary | Joy Mathew",
      "summary": "Narrates both the hardships and happiness that Gulf life has provided to Malayalees. The period from 1960 to the present form the context of the story.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNTU2ZGYwMDMtYzdhNC00MWQ2LThiOTAtZWZhY2E5ZjlmYWE3XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_UY209_CR4,0,140,209_AL_.jpg"
  },
  {
      "id": 98,
      "title": "Ee. Ma. Yau.",
      "year": "2018",
      "duration": "120",
      "rating": "2",
      "genres": "Comedy | Drama",
      "director": "Lijo Jose Pellissery",
      "cast": "Kainakary Thankaraj | Chemban Vinod Jose | Vinayakan | Dileesh Pothan",
      "summary": "Set in Chellanam, Kochi, the story of Ee. Ma. Yau revolves around the death of Vavachan Mesthiri in a coastal village. It showcases the events that unfold between two evenings and looks at death from different perspectives.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BMDY3ZjczM2YtNWZjZi00YjY0LWFhZGItNWJiYzFlNzUwNjE4XkEyXkFqcGdeQXVyODIwOTc4MDU@._V1_UY209_CR1,0,140,209_AL_.jpg"
  },
  {
      "id": 99,
      "title": "Sudani from Nigeria",
      "year": "2018",
      "duration": "123",
      "rating": "Rate",
      "genres": "Comedy | Sport",
      "director": "Zakariya",
      "cast": "Soubin Shahir | Samuel Abiola Robinson | Savithri Sreedharan | Sarasa Balussery",
      "summary": "Story of an African football player and a local football club manager from Malappuram, Kerala.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BNDJjNDg2OWMtYjUyOS00NzIyLWE5MjYtNTJiMDljZGZjOGVhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_UY209_CR1,0,140,209_AL_.jpg"
  },
  {
      "id": 100,
      "title": "Amaram",
      "year": "1991",
      "duration": "150",
      "rating": "3",
      "genres": "Drama",
      "director": "Bharathan",
      "cast": "Mammootty | Maathu | Chitra | Murali",
      "summary": "An uneducated fisherman wants his daughter to be educated and become a doctor but his dreams get shattered when she falls in love with her childhood friend.",
      "img_link": "https://m.media-amazon.com/images/M/MV5BN2NiZmIwMjEtMDZiNi00ODBhLTlhYzMtMjk1ZWI4ZDQyZWRmXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_UY209_CR4,0,140,209_AL_.jpg"
  }
]
function UsersIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
  function StarIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }
  function UserIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }
const MoviePage = ({ params }) =>{
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  const movie = movies.find((m) => m.id === parseInt(id))
//   console.log(movie)
  return (
        <>
        <div className="relative h-[500px] overflow-hidden rounded-lg">
        <img
        alt="Movie Poster"
        className="h-full w-full object-cover"
        height={1080}
        src={movie.img_link}
        style={{
        aspectRatio: "1920/1080",
        objectFit: "cover",
        }}
        width={1920}
        />
        <img 
        src={movie.img_link} 
        alt="Small Overlay Image" 
        class="overlay-image" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 py-8 md:px-12 md:py-12">
        <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-white md:text-5xl">{movie.title}</h1>
        <div className="mt-4 flex items-center space-x-4 text-gray-300">
        <div>{movie.year}</div>
        <div className="h-4 w-px bg-gray-500" />
        <div>{movie.duration} min</div>
        <div className="h-4 w-px bg-gray-500" />
        <div className="flex items-center space-x-1">
        <StarIcon className="h-5 w-5 fill-yellow-500" />
        <span>{movie.rating === 'Rate' || movie.rating === null
              ? (Math.random() * 7 + 3).toFixed(1)
              : movie.rating}</span>
        </div>
        <div className="h-4 w-px bg-gray-500" />
        <div>{movie.genres}</div>
        </div>
        </div>
        </div>
        </div>
        <div className="mx-auto max-w-4xl px-6 py-12 md:px-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr]">
        <div>
        <h2 className="text-2xl font-bold">About the Movie</h2>
        <p className="mt-4 text-gray-600">
        {movie.summary}
        </p>
        <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-2">
        <UserIcon className="h-5 w-5 text-gray-500" />
        <span className="text-gray-600">Directed by {movie.director}</span>
        </div>
        <div className="flex items-center space-x-2">
        <UsersIcon className="h-10 w-10 text-gray-500" />
        <span className="text-gray-600">Starring {movie.cast}</span>
        </div>
        </div>
        </div>
        <div>
        <h2 className="text-2xl font-bold">Synopsis</h2>
        <p className="mt-4 text-gray-600">
        {movie.summary}
        </p>
        </div>
        </div>
        </div>
        </>
  )
}
export default MoviePage


