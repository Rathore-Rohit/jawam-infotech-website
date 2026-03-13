import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import EmojiPicker from "emoji-picker-react";
import {
    Box,
    Typography,
    Fab,
    Paper,
    IconButton,
    TextField,
    InputAdornment,
    Popover,
    Zoom,
} from "@mui/material";
import {
    Close as CloseIcon,
    Send as SendIcon,
    Chat as ChatIcon,
    SentimentSatisfiedAltOutlined as EmojiIcon,
} from "@mui/icons-material";

const ChatBot = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState([
        { text: "Hi! I am **Jawam AI**. How can I help?", sender: "ai" },
    ]);
    const [loading, setLoading] = useState(false);
    const [attachedFile, setAttachedFile] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const chatEndRef = useRef(null);

    // ✅ ENV API KEY
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    useEffect(() => {
        const timer = setTimeout(() => setShowTooltip(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleSendMessage = async () => {
        if ((!inputValue.trim() && !attachedFile) || loading) return;

        const userText = inputValue;

        if (userText)
            setMessages((prev) => [...prev, { text: userText, sender: "user" }]);

        setInputValue("");
        setLoading(true);

        try {
            const promptParts = [
                {
                    text: `Identity: Jawam AI Assistant. Company: Jawam Infotech. User Message: ${userText}`,
                },
            ];

            if (attachedFile) promptParts.push(attachedFile);

            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ contents: [{ parts: promptParts }] }),
                }
            );

            const data = await response.json();

            setAttachedFile(null);

            if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
                setMessages((prev) => [
                    ...prev,
                    { text: data.candidates[0].content.parts[0].text, sender: "ai" },
                ]);
            }
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { text: "Error connecting to AI.", sender: "ai" },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                position: "fixed",
                bottom: { xs: 15, sm: 20 },
                right: { xs: 10, sm: 30 },
                zIndex: 10000,
                display: "flex",
                alignItems: "center",
                gap: 2,
            }}
        >
            <Zoom in={!isChatOpen && showTooltip}>
                <Paper
                    elevation={4}
                    sx={{
                        p: "8px 16px",
                        borderRadius: "20px 20px 0 20px",
                        bgcolor: "white",
                        color: "#06A3DA",
                        fontWeight: "bold",
                        fontSize: "14px",
                        cursor: "pointer",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        border: "1px solid #06A3DA",
                        display: { xs: "none", sm: "block" },
                    }}
                    onClick={() => setIsChatOpen(true)}
                >
                    Need Help?
                </Paper>
            </Zoom>

            {isChatOpen && (
                <Paper
                    elevation={15}
                    sx={{
                        position: "absolute",
                        bottom: 70,
                        right: 0,
                        width: {
                            xs: "calc(100vw - 20px)",
                            sm: "400px",
                        },
                        maxWidth: "400px",
                        height: {
                            xs: "70vh",
                            sm: "500px",
                        },
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "16px",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: "#06A3DA",
                            p: "10px 20px",
                            color: "white",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Typography fontWeight="bold">Jawam AI Support</Typography>

                        <IconButton
                            size="small"
                            onClick={() => setIsChatOpen(false)}
                            sx={{ color: "white" }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            p: 2,
                            bgcolor: "#F0F2F5",
                            overflowY: "auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: 1.5,
                        }}
                    >
                        {messages.map((m, i) => (
                            <Box
                                key={i}
                                sx={{
                                    alignSelf:
                                        m.sender === "user" ? "flex-end" : "flex-start",
                                    maxWidth: "90%",
                                }}
                            >
                                <Box
                                    sx={{
                                        bgcolor: m.sender === "user" ? "#06A3DA" : "white",
                                        color: m.sender === "user" ? "white" : "#333",
                                        p: "10px 14px",
                                        borderRadius: "12px",
                                        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                                        "& p": { m: 0 },
                                    }}
                                >
                                    <ReactMarkdown>{m.text}</ReactMarkdown>
                                </Box>
                            </Box>
                        ))}

                        {loading && (
                            <Typography variant="caption" sx={{ color: "gray", ml: 1 }}>
                                Thinking...
                            </Typography>
                        )}

                        <div ref={chatEndRef} />
                    </Box>

                    <Box sx={{ p: 1.5, bgcolor: "white", borderTop: "1px solid #ddd" }}>
                        <TextField
                            fullWidth
                            multiline
                            maxRows={3}
                            size="small"
                            placeholder="Message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) =>
                                e.key === "Enter" &&
                                !e.shiftKey &&
                                (e.preventDefault(), handleSendMessage())
                            }
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "12px",
                                    bgcolor: "#F4F4F4",
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton
                                            size="small"
                                            onClick={(e) => setAnchorEl(e.currentTarget)}
                                        >
                                            <EmojiIcon fontSize="small" />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleSendMessage}
                                            color="primary"
                                            disabled={loading}
                                        >
                                            <SendIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    <Popover
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={() => setAnchorEl(null)}
                        anchorOrigin={{ vertical: "top", horizontal: "left" }}
                        transformOrigin={{ vertical: "bottom", horizontal: "left" }}
                        sx={{ zIndex: 10001 }}
                    >
                        <EmojiPicker
                            onEmojiClick={(d) => setInputValue((p) => p + d.emoji)}
                            width={280}
                            height={350}
                        />
                    </Popover>
                </Paper>
            )}

            <Fab
                onClick={() => setIsChatOpen(!isChatOpen)}
                sx={{
                    bgcolor: "#06A3DA",
                    color: "white",
                    boxShadow: "0 4px 20px rgba(6, 163, 218, 0.4)",
                    "&:hover": { bgcolor: "#0582B0" },
                }}
            >
                {isChatOpen ? <CloseIcon /> : <ChatIcon />}
            </Fab>
        </Box>
    );
};

export default ChatBot;