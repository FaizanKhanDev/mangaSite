<template>
    <b-col cols="12" class="p-0 mt-2">
        <div class="block">
            <div class="block-header">
                <div class="title">
                    <h2 class="white--text">Comments</h2>
                    <div class="tag">12</div>
                </div>
                <div class="group-radio">
                    <v-btn dense x-small>popular </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn dense x-small>Latest </v-btn>
                </div>
            </div>
            <div class="writing">
                <div contenteditable="true" class="textarea" autofocus spellcheck="false">
                    <p>Don't be Shy tell us more</p>
                </div>
                <div class="message-footer">
                    <div class="text-format">
                        <v-btn text><v-icon color="#000">mdi-format-bold</v-icon></v-btn>
                        <v-btn text><v-icon color="#000">mdi-format-italic</v-icon></v-btn>
                        <v-btn text><v-icon color="#000">mdi-format-underline</v-icon></v-btn>
                        <v-btn text><v-icon color="#000">mdi-view-list</v-icon></v-btn>
                    </div>
                    <div class="group-button">
                        <v-btn>Send</v-btn>
                    </div>
                </div>
            </div>
            <div class="comment">
                <div class="user-banner">
                    <div class="user">
                        <div class="avatar">
                            <img src="https://randomuser.me/api/portraits/men/86.jpg">
                            <span class="stat grey"></span>
                        </div>
                        <h5 class="white--text">Floyd Miles</h5>
                    </div>
                    <button class="btn dropdown"><i class="ri-more-line"></i></button>
                </div>
                <div class="content">
                    <p>Actually, now that I try out the links on my message, above, none of them take me to the secure
                        site. Only my shortcut on my desktop, which I created years ago.</p>
                </div>
                <div class="message-footer">
                    <button class="btn"><i class="ri-emotion-line"></i></button>
                    <div class="divider"></div>
                    <a href="#" class="white--text">Reply</a>
                    <div class="divider"></div>
                    <span class="is-mute">6 hour</span>
                </div>
            </div>
            <div>
                <div class="comment">
                    <div class="user-banner">
                        <div class="user">
                            <div class="avatar" style="background-color:#fff5e9;border-color:#ffe0bd; color:#F98600">
                                AF
                                <span class="stat green"></span>
                            </div>
                            <h5 class="white--text">Albert Flores</h5>
                        </div>
                    </div>
                    <div class="content">
                        <p>Before installing this plugin please put back again your wordpress and site url back to http.
                        </p>
                    </div>
                    <div class="message-footer">
                        <div class="divider"></div>
                        <a href="#" class="white--text">Reply</a>
                        <div class="divider"></div>

                        <span class="is-mute">2 min</span>
                    </div>
                </div>
                <div class="reply comment">
                    <div class="user-banner">
                        <div class="user">
                            <div class="avatar">
                                <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                                    alt="">
                                <span class="stat green"></span>
                            </div>
                            <h5 class="white--text">Bessie Cooper</h5>
                        </div>
                        <button class="btn dropdown"><i class="ri-more-line"></i></button>
                    </div>
                    <div class="content">
                        <p>Hi <a href="#" class="tagged-user">@Albert Flores</a>.Thanks for your reply.</p>
                    </div>
                    <div class="message-footer">
                        <button class="btn"><i class="ri-emotion-line"></i></button>
                        <div class="reactions">
                            <button class="btn react"><img
                                    src="https://cdn-0.emojis.wiki/emoji-pics/apple/smiling-face-with-heart-eyes-apple.png"
                                    alt="">2</button>
                        </div>
                        <div class="divider"></div>
                        <a href="#" class="white--text">Reply</a>
                        <div class="divider"></div>
                        <span class="is-mute">18 sec</span>
                    </div>
                </div>
            </div>
            <div class="load">
                <v-btn text rounded>
                    <v-icon> mdi-refresh</v-icon>

                </v-btn>
            </div>
        </div>
    </b-col>
</template>

<script>
export default {

}
</script>

<style scoped></style>