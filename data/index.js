import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Ravi",
    lastName: "Kumar",
    email: "ravi@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    friends: [],
    location: "Delhi, India",
    occupation: "Software Engineer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Priya",
    lastName: "Sharma",
    email: "priya@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath:
      "https://res.cloudinary.com/ticktocktreasure/image/upload/v1687557104/download_2_qtxwgi.jpg",
    friends: [],
    location: "Mumbai, India",
    occupation: "Marketing Manager",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Amit",
    lastName: "Patel",
    email: "amit@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath:
      "https://res.cloudinary.com/ticktocktreasure/image/upload/v1687557104/download_smjgbn.jpg",
    friends: [],
    location: "Ahmedabad, India",
    occupation: "Business Analyst",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Deepak",
    lastName: "Gupta",
    email: "deepak@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath:
      "https://res.cloudinary.com/ticktocktreasure/image/upload/v1687557104/download_1_avnrfj.jpg",
    friends: [],
    location: "Kolkata, India",
    occupation: "Teacher",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Neha",
    lastName: "Singh",
    email: "neha@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath:
      "https://res.cloudinary.com/ticktocktreasure/image/upload/v1687557104/download_2_izyf30.png",
    friends: [],
    location: "Bangalore, India",
    occupation: "Software Developer",
    viewedProfile: 25630,
    impressions: 94821,
    createdAt: 1392428986,
    updatedAt: 1392428986,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Sneha",
    lastName: "Gupta",
    email: "sneha@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath:
      "https://res.cloudinary.com/ticktocktreasure/image/upload/v1687557104/download_3_vxaovk.jpg",
    friends: [],
    location: "Chennai, India",
    occupation: "Graphic Designer",
    viewedProfile: 17650,
    impressions: 60792,
    createdAt: 1365746172,
    updatedAt: 1365746172,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Rahul",
    lastName: "Verma",
    email: "rahul@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath:
      "https://res.cloudinary.com/ticktocktreasure/image/upload/v1687557105/download_1_cgj74x.png",
    friends: [],
    location: "Pune, India",
    occupation: "Accountant",
    viewedProfile: 32715,
    impressions: 76211,
    createdAt: 1427806794,
    updatedAt: 1427806794,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Amit",
    lastName: "Shah",
    email: "amit@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath:
      "https://res.cloudinary.com/ticktocktreasure/image/upload/v1687557105/download_3_gmwrxp.png",
    friends: [],
    location: "Jaipur, India",
    occupation: "Architect",
    viewedProfile: 23458,
    impressions: 51789,
    createdAt: 1503122042,
    updatedAt: 1503122042,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    firstName: "Ravi",
    lastName: "Kumar",
    location: "Delhi, India",
    description: "This is my first post!",
    picturePath:
      "https://res.cloudinary.com/ticktocktreasure/image/upload/v1687558635/images_l4d8rw.png",
    userPicturePath: users[0].picturePath,
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      {
        userId: userIds[0],
        commentText: "Awesome post!",
        commentPicture: users[Math.floor(Math.random() * 8)].picturePath,
      },
      {
        userId: userIds[1],
        commentText: "Nice picture!",
        commentPicture: users[Math.floor(Math.random() * 8)].picturePath,
      },
      {
        userId: userIds[2],
        commentText: "Great shot!",
        commentPicture: users[Math.floor(Math.random() * 8)].picturePath,
      },
      {
        userId: userIds[3],
        commentText: "Love it!",
        commentPicture: users[Math.floor(Math.random() * 8)].picturePath,
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Priya",
    lastName: "Sharma",
    location: "Mumbai, India",
    description: "Check out this amazing view!",
    picturePath:
      "https://res.cloudinary.com/ticktocktreasure/image/upload/v1687558635/download_4_dn0ojp.jpg",
    userPicturePath: users[1].picturePath,
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[4], true],
    ]),
    comments: [
      {
        userId: userIds[0],
        commentText: "Beautiful shot!",
        commentPicture: users[Math.floor(Math.random() * 8)].picturePath,
      },
      {
        userId: userIds[1],
        commentText: "Stunning!",
        commentPicture: users[Math.floor(Math.random() * 8)].picturePath,
      },
      {
        userId: userIds[2],
        commentText: "Impressive!",
        commentPicture: users[Math.floor(Math.random() * 8)].picturePath,
      },
      {
        userId: userIds[3],
        commentText: "Great composition!",
        commentPicture: users[Math.floor(Math.random() * 8)].picturePath,
      },
      {
        userId: userIds[4],
        commentText: "Amazing view!",
        commentPicture: users[Math.floor(Math.random() * 8)].picturePath,
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    firstName: "Amit",
    lastName: "Patel",
    location: "Ahmedabad, India",
    description: "Throwback to a fun day at the beach!",
    picturePath:
      "https://res.cloudinary.com/ticktocktreasure/image/upload/v1687558635/images_2_eg58qa.jpg",
    userPicturePath: users[2].picturePath,
    likes: new Map([
      [userIds[1], true],
      [userIds[4], true],
      [userIds[6], true],
    ]),
    comments: [
      {
        userId: userIds[0],
        commentText: "Fantastic!",
        commentPicture: users[Math.floor(Math.random() * 8)].picturePath,
      },
      {
        userId: userIds[1],
        commentText: "Love this picture!",
        commentPicture: users[Math.floor(Math.random() * 8)].picturePath,
      },
      {
        userId: userIds[2],
        commentText: "Memories!",
        commentPicture: users[Math.floor(Math.random() * 8)].picturePath,
      },
      {
        userId: userIds[3],
        commentText: "Such a beautiful day!",
        commentPicture: users[Math.floor(Math.random() * 8)].picturePath,
      },
      {
        userId: userIds[4],
        commentText: "Missing those times!",
        commentPicture: users[Math.floor(Math.random() * 8)].picturePath,
      },
      {
        userId: userIds[5],
        commentText: "Can't wait to visit again!",
        commentPicture: users[Math.floor(Math.random() * 8)].picturePath,
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Deepak",
    lastName: "Gupta",
    location: "Kolkata, India",
    description: "Exploring new hiking trails!",
    picturePath:
      "https://res.cloudinary.com/ticktocktreasure/image/upload/v1687558634/images_1_m3nixj.jpg",
    userPicturePath: users[3].picturePath,
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
    ]),
    comments: [
      {
        userId: userIds[0],
        commentText: "Amazing adventure!",
        commentPicture: users[Math.floor(Math.random() * 8)].picturePath,
      },
      {
        userId: userIds[1],
        commentText: "Looks like a great hike!",
        commentPicture: users[Math.floor(Math.random() * 8)].picturePath,
      },
      {
        userId: userIds[2],
        commentText: "Beautiful scenery!",
        commentPicture: users[Math.floor(Math.random() * 8)].picturePath,
      },
    ],
  },
];

// export const posts = [
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[1],
//     firstName: "Steve",
//     lastName: "Ralph",
//     location: "New York, CA",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vel voluptatum quae dolor provident dolorum tempora labore totam, consectetur error sapiente, ea accusantium amet sint debitis, laboriosam enim corrupti veritatis!Ex, vel, nulla obcaecati ad libero nihil in sint tempora, praesentium unde eveniet est possimus ea ipsam. Ipsum perferendis harum quae veritatis, incidunt cupiditate. Voluptatum alias aspernatur pariatur incidunt nobis.",
//     picturePath: "post1.jpeg",
//     userPicturePath: "p3.jpeg",
//     likes: new Map([
//       [userIds[0], true],
//       [userIds[2], true],
//       [userIds[3], true],
//       [userIds[4], true],
//     ]),
//     comments: [
//       {
//         userId: userIds[0],
//         commentText: "random comment",
//         commentPicture:users[Math.floor(Math.random() * 8)].picturePath ,
//       },
//       {
//         userId: userIds[1],
//         commentText: "another random comment",
//         commentPicture:users[Math.floor(Math.random() * 8)].picturePath ,
//       },
//       {
//         userId: userIds[2],
//         commentText: "yet another random comment",
//         commentPicture:users[Math.floor(Math.random() * 8)].picturePath "p4.jpeg",
//       },
//     ],
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[3],
//     firstName: "Whatcha",
//     lastName: "Doing",
//     location: "Korea, CA",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque aut qui dicta reprehenderit vitae voluptatibus molestias ea, quidem at. Possimus dolorum temporibus quo aliquam quae minima aliquid illum culpa adipisci?",
//     picturePath: "post2.jpeg",
//     userPicturePath: "p6.jpeg",
//     likes: new Map([
//       [userIds[7], true],
//       [userIds[4], true],
//       [userIds[1], true],
//       [userIds[2], true],
//     ]),
//     comments: [
//       {
//         userId: userIds[6],
//         commentText: "one more random comment",
//         commentPicture:users[Math.floor(Math.random() * 8)].picturePath "p8.jpeg",
//       },
//       {
//         userId: userIds[7],
//         commentText: "and another random comment",
//         commentPicture:users[Math.floor(Math.random() * 8)].picturePath "p9.jpeg",
//       },
//       {
//         userId: userIds[5],
//         commentText: "I lied, one more random comment",
//         commentPicture:users[Math.floor(Math.random() * 8)].picturePath "p7.jpeg",
//       },
//     ],
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[4],
//     firstName: "Jane",
//     lastName: "Doe",
//     location: "Utah, CA",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatem necessitatibus reiciendis ea ipsum corporis earum ad illo, corrupti aliquam autem dolore fugit aspernatur vel delectus exercitationem fuga consequuntur repellat? Aliquam beatae non dolores ex voluptate reprehenderit perferendis rerum quisquam, sapiente eum nostrum repudiandae, eaque repellat exercitationem soluta accusamus quam eius assumenda repellendus, maiores corrupti aut! Quam consectetur est deserunt!Sint odio tempora eius, exercitationem culpa adipisci alias, voluptates temporibus facilis deserunt in dolorem dicta repellat illum dolorum libero maiores beatae hic est quidem repellendus magni consequuntur? Deserunt, obcaecati repellat!",
//     picturePath: "post3.jpeg",
//     userPicturePath: "p5.jpeg",
//     likes: new Map([
//       [userIds[1], true],
//       [userIds[6], true],
//       [userIds[3], true],
//       [userIds[5], true],
//     ]),
//     comments: [
//       {
//         userId: userIds[6],
//         commentText: "one more random comment",
//         commentPicture:users[Math.floor(Math.random() * 8)].picturePath "p8.jpeg",
//       },
//     ],
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[5],
//     firstName: "Harvey",
//     lastName: "Dunn",
//     location: "Los Angeles, CA",
//     description:
//       "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
//     picturePath: "post4.jpeg",
//     userPicturePath: "p7.jpeg",
//     likes: new Map([
//       [userIds[1], true],
//       [userIds[6], true],
//       [userIds[3], true],
//     ]),
//     comments: [
//       {
//         userId: userIds[7],
//         commentText: "and another random comment",
//         commentPicture:users[Math.floor(Math.random() * 8)].picturePath "p9.jpeg",
//       },
//       {
//         userId: userIds[5],
//         commentText: "I lied, one more random comment",
//         commentPicture:users[Math.floor(Math.random() * 8)].picturePath "p7.jpeg",
//       },
//     ],
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[6],
//     firstName: "Carly",
//     lastName: "Vowel",
//     location: "Chicago, IL",
//     description:
//       "Just a short description. I'm tired of typing. I'm going to play video games now.",
//     picturePath: "post5.jpeg",
//     userPicturePath: "p8.jpeg",
//     likes: new Map([
//       [userIds[1], true],
//       [userIds[3], true],
//       [userIds[5], true],
//       [userIds[7], true],
//     ]),
//     comments: [
//       {
//         userId: userIds[6],
//         commentText: "one more random comment",
//         commentPicture:users[Math.floor(Math.random() * 8)].picturePath "p8.jpeg",
//       },
//       {
//         userId: userIds[5],
//         commentText: "I lied, one more random comment",
//         commentPicture:users[Math.floor(Math.random() * 8)].picturePath "p7.jpeg",
//       },
//     ],
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[7],
//     firstName: "Jessica",
//     lastName: "Dunn",
//     location: "Washington, DC",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ipsa illum earum quia aliquam quas nisi inventore pariatur, excepturi voluptatum, voluptas, ducimus ipsum? At eveniet quia, deserunt atque voluptatum perspiciatis!",
//     picturePath: "post6.jpeg",
//     userPicturePath: "p9.jpeg",
//     likes: new Map([
//       [userIds[1], true],
//       [userIds[2], true],
//     ]),

//     comments: [
//       {
//         userId: userIds[6],
//         commentText: "one more random comment",
//         commentPicture:users[Math.floor(Math.random() * 8)].picturePath "p8.jpeg",
//       },
//       {
//         userId: userIds[5],
//         commentText: "I lied, one more random comment",
//         commentPicture:users[Math.floor(Math.random() * 8)].picturePath "p7.jpeg",
//       },
//       {
//         userId: userIds[7],
//         commentText: "and another random comment",
//         commentPicture:users[Math.floor(Math.random() * 8)].picturePath "p9.jpeg",
//       },
//     ],
//   },
// ];
