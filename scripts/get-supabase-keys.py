#!/usr/bin/env python3.11
import asyncio
from browser_use import Agent
from browser_use.llm.google.chat import ChatGoogle

async def get_keys():
    llm = ChatGoogle(
        model="gemini-2.0-flash",
        api_key="AIzaSyAuICCeynZGqbuTmnXBtiGsaO-cA73G96k"
    )

    agent = Agent(
        task="""
        Get the Anon public key from the Supabase project:
        
        1. Go to https://supabase.com/dashboard/project/tnwvebxoqzvulyndrxtf/settings/api
        2. If you need to login, look for existing session or click "Continue with GitHub". Wait for the redirect.
        3. Once on the API Settings page, look for the "Project API keys" section.
        4. Find the row labeled "anon" and "public".
        5. Copy the long JWT token string in that row. It should start with "eyJ...".
        6. Return that exact string.
        """,
        llm=llm,
        use_vision=True,
    )

    print("Getting anon key from Supabase Dashboard...")
    result = await agent.run()
    
    with open('/Users/federicodeponte/wireframe/scripts/key.txt', 'w') as f:
        f.write(str(result))

if __name__ == "__main__":
    asyncio.run(get_keys())
