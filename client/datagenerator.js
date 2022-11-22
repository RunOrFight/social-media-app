const casual = require("casual");
const fs = require("fs");
const path = require("path");

function random_elements(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

casual.define("user", function (userId) {
  const username = casual.full_name;
  return {
    id: userId,
    username,
    email: casual.email,
    password: casual.password,
    profilePicture: "https://api.lorem.space/image/face?dummyId=" + userId,
    coverPicture: "https://api.lorem.space/image?w=1200&dummyId=" + userId,
    followers: [],
    followings: [],
    isAdmin: false,
    description: casual.short_description,
    city: casual.city,
    from: casual.city,
    relationship: casual.random_element([1, 2, 3]),
    online: casual.coin_flip
  };
});

casual.define("post", function (userId) {
  const postId = casual.uuid;
  return {
    id: postId,
    userId,
    description: casual.coin_flip ? casual.text : "",
    image: "https://api.lorem.space/image?dummyId=" + postId,
    likes: [],
    date: casual.date(),
    comments: []
  };
});

const users = [];
const userIds = [];
const posts = [];

for (let userIdx = 0; userIdx < 99; userIdx++) {
  const userId = casual.uuid;
  users.push(casual.user(userId));
  userIds.push(userId);
  for (let postIdx = 0; postIdx < casual.integer(1, 20); postIdx++) {
    posts.push(casual.post(userId));
  }
}

for (let userIdx = 0; userIdx < users.length; userIdx++) {
  const user = users[userIdx];
  user.followers = random_elements(
    userIds,
    casual.integer(0, users.length)
  ).filter((userId) => userId !== user.id);
  user.followings = random_elements(
    userIds,
    casual.integer(0, users.length)
  ).filter((userId) => userId !== user.id);
}

for (let postIdx = 0; postIdx < users.length; postIdx++) {
  const post = posts[postIdx];
  post.likes = random_elements(userIds, casual.integer(0, users.length)).filter(
    (userId) => userId !== post.userId
  );
  post.comments = random_elements(userIds, casual.integer(0, users.length)).map(
    (userId) => {
      return {
        userId,
        comment: casual.short_description
      };
    }
  );
}

fs.writeFile(
  path.join(__dirname, "src/data/users.json"),
  JSON.stringify(users),
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);

fs.writeFile(
  path.join(__dirname, "src/data/posts.json"),
  JSON.stringify(posts),
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);
