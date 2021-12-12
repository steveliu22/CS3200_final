import RecordListScreen from "./record-list-screen";
import UserReplyListScreen from "./user-reply-list-screen";
import ChannelUserListScreen from "../channels/channel-user-list-screen";
import RecordEditorScreen from "./record-editor-screen";
import ChannelEditorScreen from "../channels/channel-editor-screen";
import VideoListScreen from "../videos/video-list-screen";
import VideoEditorScreen from "../videos/video-editor-screen";
import ChannelListScreen from "../channels/channel-list-screen";
import VideoChannelListScreen from "../videos/video-channel-list-screen";
import CommentListScreen from "../comments/comment-list-screen";
import CommentVideoListScreen from "../comments/comment-video-list-screen";
import CommentEditorScreen from "../comments/comment-editor-screen";
import CommentReplyListScreen from "../comments/comment-reply-list-screen";
import UsersForReplyList from "../replies/users-for-replies-list";
import CommentsForReplyList from "../replies/comments-for-replies-list";
import ReplyListScreen from "../replies/reply-list-screen";
import ReplyEditorScreen from "../replies/reply-editor-screen";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/list", "/"]} exact={true}>
                    <RecordListScreen/>
                </Route>
                <Route path={["/list", "/users/:id/replies"]} exact={true}>
                    <UserReplyListScreen/>
                </Route>
                <Route path="/edit/:id" exact={true}>
                    <RecordEditorScreen/>
                </Route>
                <Route path={["/list", "/:id/channels"]} exact={true}>
                    <ChannelUserListScreen/>
                </Route>
                <Route path={["/list", "/channels"]} exact={true}>
                    <ChannelListScreen/>
                </Route>
                <Route path="/edit/channels/:uid/:id" exact={true}>
                    <ChannelEditorScreen/>
                </Route>
                <Route path={["/list", "/:id/videos"]} exact={true}>
                    <VideoChannelListScreen/>
                </Route>
                <Route path={["/list", "/videos"]} exact={true}>
                    <VideoListScreen/>
                </Route>
                <Route path="/edit/videos/:cid/:id" exact={true}>
                    <VideoEditorScreen/>
                </Route>
                <Route path={["/list", "/comments"]} exact={true}>
                    <CommentListScreen/>
                </Route>
                <Route path={["/list", "/comments/:id/replies"]} exact={true}>
                    <CommentReplyListScreen/>
                </Route>
                <Route path={["/list", "/:id/comments"]} exact={true}>
                    <CommentVideoListScreen/>
                </Route>
                <Route path="/edit/comments/:vid/:id" exact={true}>
                    <CommentEditorScreen/>
                </Route>
                <Route path={["/list", "/replies"]} exact={true}>
                    <ReplyListScreen/>
                </Route>
                <Route path={["/list", "/replies/users/comments"]} exact={true}>
                    <UsersForReplyList/>
                </Route>
                <Route path={["/list", "/replies/users/comments/:uid"]} exact={true}>
                    <CommentsForReplyList/>
                </Route>
                <Route path="/edit/replies/:uid/:cid/:id" exact={true}>
                    <ReplyEditorScreen/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
