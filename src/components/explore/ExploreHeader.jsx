import BookShelf from "./BookShelf";


const subjects = [
  {
    title: "Arts",
    extra: [
      { label: "Art", key: "art" },
      { label: "Architecture", key: "architecture" },
      { label: "Design", key: "design" },
      { label: "Drawing", key: "drawing" },
      { label: "Painting", key: "painting" },
      { label: "Photography", key: "photography" },
      { label: "Sculpture", key: "sculpture" },
      { label: "Performing arts", key: "performing arts" },
      { label: "Music", key: "music" },
      { label: "Dance", key: "dance" },
      { label: "Theater", key: "theater" },
      { label: "Film", key: "film" },
    ],
  },

  {
    title: "Biography & Autobiography",
    extra: [
      { label: "Biography", key: "biography" },
      { label: "Autobiography", key: "autobiography" },
      { label: "Memoirs", key: "memoirs" },
      { label: "Diaries", key: "diaries" },
      { label: "Letters", key: "letters" },
      { label: "Personal narratives", key: "personal narratives" },
    ],
  },

  {
    title: "Business & Economics",
    extra: [
      { label: "Business", key: "business" },
      { label: "Economics", key: "economics" },
      { label: "Finance", key: "finance" },
      { label: "Accounting", key: "accounting" },
      { label: "Management", key: "management" },
      { label: "Marketing", key: "marketing" },
      { label: "Entrepreneurship", key: "entrepreneurship" },
      { label: "Investments", key: "investments" },
      { label: "Leadership", key: "leadership" },
      { label: "Human resources", key: "human resources" },
    ],
  },

  {
    title: "Computers & Technology",
    extra: [
      {
        label: "Computer science",
        key: "computer science",
      },
      {
        label: "Programming",
        key: "programming",
      },
      {
        label: "Software engineering",
        key: "software engineering",
      },
      {
        label: "Web development",
        key: "web development",
      },
      {
        label: "Databases",
        key: "databases",
      },
      {
        label: "Artificial intelligence",
        key: "artificial intelligence",
      },
      {
        label: "Machine learning",
        key: "machine learning",
      },
      {
        label: "Data science",
        key: "data science",
      },
      {
        label: "Computer networks",
        key: "computer networks",
      },
      {
        label: "Cybersecurity",
        key: "cybersecurity",
      },
      {
        label: "Operating systems",
        key: "operating systems",
      },
      {
        label: "Information technology",
        key: "information technology",
      },
    ],
  },

  {
    title: "Education",
    extra: [
      { label: "Education", key: "education" },
      { label: "Teaching", key: "teaching" },
      { label: "Learning", key: "learning" },
      { label: "Educational psychology", key: "educational psychology" },
      { label: "Curriculum", key: "curriculum" },
      { label: "Schools", key: "schools" },
      { label: "Universities", key: "universities" },
      { label: "Distance education", key: "distance education" },
      { label: "Special education", key: "special education" },
    ],
  },

  {
    title: "Fiction",
    extra: [
      { label: "Fiction", key: "fiction" },
      { label: "Adventure", key: "adventure" },
      { label: "Classics", key: "classics" },
      { label: "Crime", key: "crime" },
      { label: "Detective fiction", key: "detective fiction" },
      { label: "Fantasy", key: "fantasy" },
      { label: "Historical fiction", key: "historical fiction" },
      { label: "Horror", key: "horror" },
      { label: "Mystery", key: "mystery" },
      { label: "Romance", key: "romance" },
      { label: "Science fiction", key: "science fiction" },
      { label: "Thrillers", key: "thrillers" },
      { label: "Short stories", key: "short stories" },
      { label: "Literary fiction", key: "literary fiction" },
    ],
  },

  {
    title: "Health & Fitness",
    extra: [
      { label: "Health", key: "health" },
      { label: "Fitness", key: "fitness" },
      { label: "Exercise", key: "exercise" },
      { label: "Nutrition", key: "nutrition" },
      { label: "Diets", key: "diets" },
      { label: "Mental health", key: "mental health" },
      { label: "Medicine", key: "medicine" },
      { label: "Public health", key: "public health" },
      { label: "Yoga", key: "yoga" },
      { label: "Sports medicine", key: "sports medicine" },
    ],
  },

  {
    title: "History",
    extra: [
      { label: "History", key: "history" },
      { label: "Ancient history", key: "ancient history" },
      { label: "Medieval history", key: "medieval history" },
      { label: "Modern history", key: "modern history" },
      { label: "World history", key: "world history" },
      { label: "Military history", key: "military history" },
      { label: "Political history", key: "political history" },
      { label: "Social history", key: "social history" },
      { label: "European history", key: "european history" },
      { label: "Asian history", key: "asian history" },
      { label: "American history", key: "american history" },
    ],
  },

  {
    title: "Language & Literature",
    extra: [
      { label: "Literature", key: "literature" },
      { label: "English literature", key: "english literature" },
      { label: "American literature", key: "american literature" },
      { label: "Poetry", key: "poetry" },
      { label: "Drama", key: "drama" },
      { label: "Literary criticism", key: "literary criticism" },
      { label: "Linguistics", key: "linguistics" },
      { label: "Language", key: "language" },
      { label: "Grammar", key: "grammar" },
      { label: "Translation", key: "translation" },
      { label: "Writing", key: "writing" },
    ],
  },

  {
    title: "Law",
    extra: [
      { label: "Law", key: "law" },
      { label: "Criminal law", key: "criminal law" },
      { label: "Civil law", key: "civil law" },
      { label: "Constitutional law", key: "constitutional law" },
      { label: "International law", key: "international law" },
      { label: "Business law", key: "business law" },
      { label: "Human rights", key: "human rights" },
      { label: "Legal history", key: "legal history" },
    ],
  },

  {
    title: "Mathematics",
    extra: [
      { label: "Mathematics", key: "mathematics" },
      { label: "Algebra", key: "algebra" },
      { label: "Geometry", key: "geometry" },
      { label: "Calculus", key: "calculus" },
      { label: "Statistics", key: "statistics" },
      { label: "Probability", key: "probability" },
      { label: "Number theory", key: "number theory" },
      { label: "Discrete mathematics", key: "discrete mathematics" },
      { label: "Applied mathematics", key: "applied mathematics" },
    ],
  },

  {
    title: "Philosophy",
    extra: [
      { label: "Philosophy", key: "philosophy" },
      { label: "Ethics", key: "ethics" },
      { label: "Logic", key: "logic" },
      { label: "Metaphysics", key: "metaphysics" },
      { label: "Epistemology", key: "epistemology" },
      { label: "Political philosophy", key: "political philosophy" },
      { label: "Philosophy of science", key: "philosophy of science" },
      { label: "Philosophy of religion", key: "philosophy of religion" },
    ],
  },

  {
    title: "Religion",
    extra: [
      { label: "Religion", key: "religion" },
      { label: "Christianity", key: "christianity" },
      { label: "Islam", key: "islam" },
      { label: "Hinduism", key: "hinduism" },
      { label: "Buddhism", key: "buddhism" },
      { label: "Judaism", key: "judaism" },
      { label: "Spirituality", key: "spirituality" },
      { label: "Mythology", key: "mythology" },
    ],
  },

  {
    title: "Science",
    extra: [
      { label: "Science", key: "science" },
      { label: "Physics", key: "physics" },
      { label: "Chemistry", key: "chemistry" },
      { label: "Biology", key: "biology" },
      { label: "Astronomy", key: "astronomy" },
      { label: "Geology", key: "geology" },
      { label: "Environmental science", key: "environmental science" },
      { label: "Ecology", key: "ecology" },
      { label: "Zoology", key: "zoology" },
      { label: "Botany", key: "botany" },
      { label: "Neuroscience", key: "neuroscience" },
    ],
  },

  {
    title: "Social Sciences",
    extra: [
      { label: "Social sciences", key: "social sciences" },
      { label: "Psychology", key: "psychology" },
      { label: "Sociology", key: "sociology" },
      { label: "Political science", key: "political science" },
      { label: "Anthropology", key: "anthropology" },
      { label: "Economics", key: "economics" },
      { label: "Geography", key: "geography" },
      { label: "International relations", key: "international relations" },
      { label: "Gender studies", key: "gender studies" },
    ],
  },

  {
    title: "Sports & Recreation",
    extra: [
      { label: "Sports", key: "sports" },
      { label: "Football", key: "football" },
      { label: "Cricket", key: "cricket" },
      { label: "Basketball", key: "basketball" },
      { label: "Tennis", key: "tennis" },
      { label: "Baseball", key: "baseball" },
      { label: "Olympic games", key: "olympic games" },
      { label: "Running", key: "running" },
      { label: "Swimming", key: "swimming" },
      { label: "Outdoor recreation", key: "outdoor recreation" },
      { label: "Games", key: "games" },
    ],
  },

  {
    title: "Travel",
    extra: [
      { label: "Travel", key: "travel" },
      { label: "Travel guides", key: "travel guides" },
      { label: "Tourism", key: "tourism" },
      { label: "Adventure travel", key: "adventure travel" },
      { label: "Road trips", key: "road trips" },
      { label: "Travel writing", key: "travel writing" },
      { label: "Hotels", key: "hotels" },
      { label: "Camping", key: "camping" },
    ],
  },

  {
    title: "Juvenile & Children's Books",
    extra: [
      { label: "Children's books", key: "children's books" },
      { label: "Children's fiction", key: "children's fiction" },
      { label: "Picture books", key: "picture books" },
      { label: "Young adult fiction", key: "young adult fiction" },
      { label: "Fairy tales", key: "fairy tales" },
      { label: "Folklore", key: "folklore" },
      { label: "Educational books", key: "educational books" },
      { label: "Children's poetry", key: "children's poetry" },
    ],
  },

  {
    title: "Technology & Engineering",
    extra: [
      { label: "Engineering", key: "engineering" },
      { label: "Electrical engineering", key: "electrical engineering" },
      { label: "Mechanical engineering", key: "mechanical engineering" },
      { label: "Civil engineering", key: "civil engineering" },
      { label: "Chemical engineering", key: "chemical engineering" },
      { label: "Computer engineering", key: "computer engineering" },
      { label: "Robotics", key: "robotics" },
      { label: "Telecommunications", key: "telecommunications" },
      { label: "Automotive engineering", key: "automotive engineering" },
    ],
  },
];

const ExploreHeader = () => {
  return (
    <div>
      {subjects.map((subject) => (
        <>
          <h3>{subject.title}</h3>
          {subject.extra.map(s=>(
             <BookShelf
              key={s.key}
              title={s.label}
              subject={s.label}
            />
          ))}

          <h1>end</h1>
        </>
      ))}
    </div>
  );
};

export default ExploreHeader;
