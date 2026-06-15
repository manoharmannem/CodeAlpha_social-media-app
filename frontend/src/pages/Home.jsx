import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

function Home() {
  const [profile, setProfile] = useState({
    username: "User",
    bio: "Welcome to Pulse",
    photo: "",
  });

  const [posts, setPosts] = useState(() => {
  const savedPosts = localStorage.getItem("pulsePosts");

  if (savedPosts) {
    return JSON.parse(savedPosts);
  }

  return [
    {
      id: 1,
      user: "Rahul",
      avatar: "https://i.pravatar.cc/150?img=1",
      content: "Enjoying a beautiful evening 🌅",
      image: "",
      likes: 15,
      comments: ["Nice!", "Awesome"],
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "Priya",
      avatar: "https://i.pravatar.cc/150?img=5",
      content: "Working on a React project today 💻",
      image: "",
      likes: 22,
      comments: ["Great work"],
      time: "5 hours ago",
    },
    {
    id: 3,
    user: "Karthik",
    avatar: "https://i.pravatar.cc/150?img=15",
    content:
      "Morning workout completed 💪",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    likes: 210,
    comments: ["Motivation!", "Keep going"],
    time: "1 day ago",
  },

  {
    id: 4,
    user: "Ananya",
    avatar: "https://i.pravatar.cc/150?img=32",
    content:
      "Coffee + Coding = Perfect Day ☕💻",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    likes: 156,
    comments: ["Same here!", "Nice setup"],
    time: "3 hours ago",
  },

  {
    id: 5,
    user: "Arjun",
    avatar: "https://i.pravatar.cc/150?img=18",
    content:
      "Exploring new places this weekend ✈️",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    likes: 275,
    comments: ["Wonderful!", "Enjoy"],
    time: "6 hours ago",
  },

  {
    id: 6,
    user: "Sneha",
    avatar: "https://i.pravatar.cc/150?img=45",
    content:
      "Reading a new book on web development 📚",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
    likes: 67,
    comments: ["Interesting!", "Nice choice"],
    time: "8 hours ago",
  },

  {
    id: 7,
    user: "Vikram",
    avatar: "https://i.pravatar.cc/150?img=52",
    content:
      "Weekend cricket match with friends 🏏",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
    likes: 340,
    comments: ["Well played!", "Champion"],
    time: "Yesterday",
  },

  {
    id: 8,
    user: "Meera",
    avatar: "https://i.pravatar.cc/150?img=29",
    content:
      "Learning Full Stack Development today 🔥",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    likes: 198,
    comments: ["Keep learning!", "Nice"],
    time: "4 hours ago",
  }
  ];
});
  useEffect(() => {
  const savedUser = JSON.parse(
    localStorage.getItem("pulseUser")
  );

  const savedProfile = JSON.parse(
    localStorage.getItem("pulseProfile")
  );

  if (savedUser) {
    setProfile({
      username: savedUser.username,
      bio: savedProfile?.bio || "Welcome to Pulse",
      photo: savedProfile?.photo || "",
    });
  }
}, []);

  useEffect(() => {
    localStorage.setItem(
      "pulsePosts",
      JSON.stringify(posts)
    );
  }, [posts]);

  const addPost = (text, image) => {
    const newPost = {
      id: Date.now(),
      user: profile.username,
      avatar: profile.photo,
      content: text,
      image: image || "",
      likes: 0,
      comments: [],
      time: "Just now",
    };

    setPosts([newPost, ...posts]);
  };

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  const addComment = (id, commentText) => {
    if (!commentText.trim()) return;

    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: [...post.comments, commentText],
            }
          : post
      )
    );
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const editPost = (id, content) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, content }
          : post
      )
    );
  };

  return (
    <>
      <Navbar />

      <div className="home-container">

        <div className="profile-home-card">
          {profile.photo ? (
            <img
              src={profile.photo}
              alt="profile"
              className="home-profile-img"
            />
          ) : (
            <div className="home-profile-placeholder">
              👤
            </div>
          )}

          <h2>{profile.username}</h2>
          <p>{profile.bio}</p>
        </div>

        <CreatePost addPost={addPost} />

        <div className="feed-title">
          <h2>Latest Posts</h2>
        </div>

        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onLike={handleLike}
            addComment={addComment}
            deletePost={deletePost}
            editPost={editPost}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
