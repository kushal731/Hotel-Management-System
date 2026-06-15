import anthropic

client = anthropic.Anthropic(
    api_key="your_real_api_key"
)

message = client.messages.create(
    model="claude-3-opus-20240229",  # valid model name
    max_tokens=2000,
    messages=[
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "Create a web site like YouTube using MERN"}
            ]
        }
    ]
)

print(message.content)
