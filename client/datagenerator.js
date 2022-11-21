const casual = require("casual");
const fs = require("fs");
const path = require("path");

function random_elements(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

casual.define("user", function (userId) {
  return {
    id: userId,
    username: casual.full_name,
    email: casual.email,
    password: casual.password,
    profilePicture: "https://joeschmoe.io/api/v1/" + userId,
    coverPicture: "https://picsum.photos/650/400",
    followers: [],
    followings: [],
    isAdmin: false,
    description: casual.description,
    city: casual.city,
    from: casual.city,
    relationship: casual.random_element([1, 2, 3])
  };
});

casual.define("post", function (userId) {
  const postId = casual.uuid;
  return {
    id: postId,
    userId,
    description: casual.text,
    image: "https://picsum.photos/650/400?random=" + postId,
    likes: []
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
