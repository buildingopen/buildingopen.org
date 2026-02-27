import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Agent Protocol Layer - Building Open",
  description: "A protocol specification for agent-to-world interaction. TCP/IP for the agent era.",
};

export default function AgentProtocolPost() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/blog" className="text-sm text-zinc-500 hover:text-white transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Protocol</span>
            <span className="text-xs text-zinc-500">8 min read</span>
            <span className="text-xs text-zinc-500">February 27, 2026</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">The Agent Protocol Layer</h1>
          <p className="text-zinc-500 italic">A protocol specification for agent-to-world interaction.</p>
          <p className="text-xs text-zinc-500 mt-3">Version 0.1 (Draft) &middot; RFC</p>
        </header>

        <section className="mb-10 text-zinc-400 space-y-6">

          {/* 1. The Problem */}
          <h2 className="text-white font-semibold text-xl mt-8 mb-2">1. The Problem</h2>

          <p className="leading-relaxed">
            AI agents can think. They can plan, reason, and make decisions. What they cannot do is <em className="text-zinc-300">act</em>.
          </p>

          <p className="leading-relaxed">
            Every agent today hits the same wall: the last mile between intent and execution. An agent can decide to book a flight, but it has no standardized way to prove who it represents, pay for the ticket, or receive the confirmation. So developers build bespoke integrations for each system, each payment provider, each communication channel. Every connection is custom. Nothing is reusable.
          </p>

          <p className="leading-relaxed">
            MCP solved part of this. It gave agents a standard way to access tools and data sources. But MCP operates within the model&apos;s context: it connects agents to information. What&apos;s missing is the layer that connects agents to the real world, the layer where money moves, messages get sent, and actions have consequences.
          </p>

          <p className="leading-relaxed">
            This is the gap. Not another agent framework. Not another orchestration tool. A protocol for agent-to-world interaction.
          </p>

          <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-sm text-zinc-300 overflow-x-auto leading-relaxed">{`┌─────────────────────────────────────────────────┐
│                   AI Agent                       │
│         (Claude, GPT, Gemini, local)             │
└──────────────────────┬──────────────────────────┘
                       │
              ┌────────▼────────┐
              │       MCP       │  ← Tools, data, context
              └────────┬────────┘
                       │
          ┌────────────▼────────────┐
          │  Agent Protocol Layer   │  ← Identity, payments,
          │   (this spec)           │    permissions, comms,
          └────────────┬────────────┘    actions
                       │
    ┌──────────┬───────┼───────┬──────────┐
    ▼          ▼       ▼       ▼          ▼
  Banks    Email    APIs    Forms    Databases
         SMS/WhatsApp    Gov Systems`}</pre>

          <p className="leading-relaxed font-medium text-zinc-300">
            MCP is the nervous system. The Agent Protocol Layer is the hands.
          </p>

          {/* 2. The Five Primitives */}
          <h2 className="text-white font-semibold text-xl mt-12 mb-2">2. The Five Primitives</h2>

          <p className="leading-relaxed">
            Every agent-to-world interaction reduces to five primitives. They are orthogonal (each solves one problem), composable (they combine for complex workflows), and universal (they apply regardless of agent framework or provider).
          </p>

          {/* 2.1 Identity */}
          <h3 className="text-white font-semibold text-lg mt-8 mb-2">2.1 Identity</h3>

          <p className="leading-relaxed">
            <span className="text-zinc-300 font-medium">Problem:</span> How does a system know that an agent acts on behalf of a specific person or organization?
          </p>

          <p className="leading-relaxed">
            An agent presents a signed identity token that binds three things: the principal (the human or org), the agent (the software instance), and the scope (what the agent is authorized to do). Systems verify the token without contacting the principal.
          </p>

          <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-sm text-zinc-300 overflow-x-auto">{`AgentIdentityToken {
  principal:   "did:web:federicodeponte.com"
  agent:       "did:agent:openchat-v4:instance-8f3a"
  scope:       ["payments:read", "payments:write:max_500_eur"]
  issued:      "2026-02-27T10:00:00Z"
  expires:     "2026-02-27T22:00:00Z"
  signature:   <principal_private_key_signature>
}`}</pre>

          <p className="leading-relaxed">
            Built on DIDs (Decentralized Identifiers, W3C standard). No centralized identity provider required.
          </p>

          {/* 2.2 Permissions */}
          <h3 className="text-white font-semibold text-lg mt-8 mb-2">2.2 Permissions</h3>

          <p className="leading-relaxed">
            <span className="text-zinc-300 font-medium">Problem:</span> What can an agent do, and what is off-limits?
          </p>

          <p className="leading-relaxed">
            Permissions are declarative, granular, and revocable in real-time. A principal defines a permission policy. The agent carries it. Any receiving system can verify it.
          </p>

          <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-sm text-zinc-300 overflow-x-auto">{`PermissionPolicy {
  allow: [
    "email:send:to=*@company.com",
    "calendar:read",
    "payments:execute:max_amount=200,currency=EUR"
  ]
  deny: [
    "email:send:to=*@competitor.com",
    "data:delete:*"
  ]
  requires_confirmation: [
    "payments:execute:amount>100"
  ]
  ttl: "8h"
}`}</pre>

          <p className="leading-relaxed">
            The <code className="text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">requires_confirmation</code> field introduces a human-in-the-loop checkpoint. Agents operate autonomously within bounds, but flag high-stakes actions for approval.
          </p>

          {/* 2.3 Payments */}
          <h3 className="text-white font-semibold text-lg mt-8 mb-2">2.3 Payments</h3>

          <p className="leading-relaxed">
            <span className="text-zinc-300 font-medium">Problem:</span> How does an agent spend money within defined limits?
          </p>

          <p className="leading-relaxed">
            Agents need to transact, not just request transactions. The protocol defines a payment intent that any payment processor can fulfill, without the agent ever touching raw credentials.
          </p>

          <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-sm text-zinc-300 overflow-x-auto">{`PaymentIntent {
  from:        <agent_identity_token>
  to:          "merchant:stripe:acct_1234"
  amount:      49.99
  currency:    "EUR"
  purpose:     "Flight booking LH1234, 2026-03-15"
  policy_ref:  <permission_policy_hash>
  max_amount:  200.00
}`}</pre>

          <p className="leading-relaxed">
            The payment processor verifies the agent&apos;s identity, checks the permission policy, and executes if everything passes. The agent never sees card numbers, bank accounts, or credentials. Payment processors implement a standard interface; agents don&apos;t need to know which one is behind it.
          </p>

          {/* 2.4 Communication */}
          <h3 className="text-white font-semibold text-lg mt-8 mb-2">2.4 Communication</h3>

          <p className="leading-relaxed">
            <span className="text-zinc-300 font-medium">Problem:</span> How does an agent send and receive messages across channels?
          </p>

          <p className="leading-relaxed">
            An agent shouldn&apos;t need a different integration for email, SMS, WhatsApp, and USSD. The protocol defines a unified message envelope. Channel adapters handle delivery.
          </p>

          <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-sm text-zinc-300 overflow-x-auto">{`MessageEnvelope {
  from:        <agent_identity_token>
  to:          "channel:email:user@example.com"
  body:        "Your flight LH1234 is confirmed for March 15."
  reply_to:    "channel:webhook:https://agent.example.com/inbox"
  channel_preference: ["whatsapp", "sms", "email"]
  metadata: {
    thread_id:  "booking-8f3a-flight"
    priority:   "normal"
  }
}`}</pre>

          <p className="leading-relaxed">
            The <code className="text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">channel_preference</code> array lets agents try the best channel first and fall back gracefully. The <code className="text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">reply_to</code> field lets any system send structured responses back to the agent, regardless of the originating channel.
          </p>

          {/* 2.5 Actions */}
          <h3 className="text-white font-semibold text-lg mt-8 mb-2">2.5 Actions</h3>

          <p className="leading-relaxed">
            <span className="text-zinc-300 font-medium">Problem:</span> How does an agent interact with systems that weren&apos;t built for agents?
          </p>

          <p className="leading-relaxed">
            Most of the world&apos;s systems expose forms, not APIs. Government portals, university applications, insurance claims, booking systems. Actions separate <em className="text-zinc-300">intent</em> from <em className="text-zinc-300">execution</em>: the agent declares what it wants to do, and a registered action adapter for that target handles how.
          </p>

          <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-sm text-zinc-300 overflow-x-auto">{`ActionRequest {
  target:      "https://portal.gov.example/visa-application"
  type:        "form_submission"
  identity:    <agent_identity_token>
  fields: {
    "full_name":     "Federico De Ponte",
    "passport_no":   "<from_secure_vault>",
    "purpose":       "Business"
  }
  attachments: ["doc:vault:passport_scan_2026"]
  confirm_before_submit: true
}`}</pre>

          <p className="leading-relaxed">
            Action adapters are the protocol&apos;s extension point. Anyone can register an adapter for a target system. The adapter registry maps target URLs to known adapters, with versioning and trust scores:
          </p>

          <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-sm text-zinc-300 overflow-x-auto">{`AdapterRegistry {
  "portal.gov.example/visa-application": {
    adapter:    "did:adapter:gov-forms-eu:v2.1"
    method:     "browser_automation"
    trust:      "verified"      // community-verified, auditable
    last_tested: "2026-02-20"
  }
}`}</pre>

          <p className="leading-relaxed">
            This is the hardest primitive. Browser automation is fragile; forms change without notice; CAPTCHAs exist. The protocol doesn&apos;t pretend to solve all of this. What it does is standardize the interface so that solutions are reusable. An adapter that handles German government portals today works for every agent tomorrow, not just the one that built it.
          </p>

          {/* 3. How They Compose */}
          <h2 className="text-white font-semibold text-xl mt-12 mb-2">3. How They Compose</h2>

          <p className="leading-relaxed">
            The primitives are designed to combine. Here&apos;s a complete workflow.
          </p>

          <p className="leading-relaxed">
            You tell your agent to book the cheapest Berlin-to-Lisbon flight on March 15. The agent presents its identity token to the airline&apos;s booking system. The airline verifies: this agent represents you, it&apos;s authorized to act. The agent finds a &euro;49.99 fare, checks its own permission policy (max &euro;500, no confirmation needed under &euro;200), and submits the booking through a registered adapter that handles the airline&apos;s form, seat selection, passenger details, terms acceptance. The airline returns a payment intent. The agent&apos;s payment gateway fulfills it through Stripe; the agent never sees your card number. Transaction is logged with a policy reference for your audit trail. Thirty seconds later, you get a WhatsApp message with your booking confirmation and receipt.
          </p>

          <p className="leading-relaxed">
            No custom integration. The airline accepted a standard identity token. The agent used a registered adapter. The payment went through a standard gateway. Five primitives, one workflow, every step auditable.
          </p>

          <p className="leading-relaxed">Now change the context:</p>

          <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-sm text-zinc-300 overflow-x-auto leading-relaxed">{`Same protocol. Different world.

A farmer in Kenya has an agent negotiate seed prices
across three suppliers.

  Identity:     cooperative membership credential
                (did:web:kenyacoop.org)
  Permissions:  max 50,000 KES per transaction
  Action:       adapter for supplier's USSD ordering system
  Payment:      M-Pesa, not Stripe
  Comms:        confirmation via SMS, not WhatsApp

Different adapters. Same five primitives. Same protocol.`}</pre>

          <p className="leading-relaxed font-medium text-zinc-300">
            The farmer didn&apos;t need someone to build an app for her. She needed the protocol to exist.
          </p>

          {/* 4. Security Model */}
          <h2 className="text-white font-semibold text-xl mt-12 mb-2">4. Security Model</h2>

          <p className="leading-relaxed">
            A protocol that moves money and submits government forms on someone&apos;s behalf requires an explicit threat model.
          </p>

          <p className="leading-relaxed">
            <span className="text-zinc-300 font-medium">Token security.</span> Identity tokens are short-lived (default: 12 hours), scoped to specific capabilities, and signed with the principal&apos;s private key. A stolen token is usable only within its scope and TTL. Tokens include a <code className="text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">jti</code> (unique ID) for revocation; principals can revoke any active token through their identity provider.
          </p>

          <p className="leading-relaxed">
            <span className="text-zinc-300 font-medium">Replay protection.</span> Every request includes a monotonic nonce and timestamp. Receiving systems reject duplicate nonces and requests older than a configurable window (default: 5 minutes). Payment intents additionally require idempotency keys, so a replayed payment request returns the original result, not a duplicate charge.
          </p>

          <p className="leading-relaxed">
            <span className="text-zinc-300 font-medium">Adapter trust.</span> Action adapters run code against third-party websites. The adapter registry uses a trust model with three tiers: <code className="text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">unverified</code> (anyone can publish), <code className="text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">community</code> (peer-reviewed, open source), <code className="text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">verified</code> (audited by a recognized security firm). Agents can set minimum trust levels in their permission policy. High-stakes actions (payments, legal submissions) default to <code className="text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">verified</code> adapters only.
          </p>

          <p className="leading-relaxed">
            <span className="text-zinc-300 font-medium">Credential isolation.</span> Agents never access raw credentials. Payments go through tokenized gateways. Form fields marked as sensitive (passport numbers, SSNs) are retrieved at execution time from an encrypted vault; the agent sees a reference, not the value. The adapter receives the decrypted value in a sandboxed runtime that prevents exfiltration.
          </p>

          <p className="leading-relaxed">
            <span className="text-zinc-300 font-medium">Audit trail.</span> Every primitive interaction produces a signed log entry: who (identity), what (action), when (timestamp), result (success/failure), and policy_ref (which permission authorized it). The principal can audit their agent&apos;s full activity history.
          </p>

          {/* 5. What Exists vs. What's Missing */}
          <h2 className="text-white font-semibold text-xl mt-12 mb-2">5. What Exists vs. What&apos;s Missing</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-zinc-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-zinc-900">
                  <th className="text-left px-4 py-3 text-zinc-300 font-medium border-b border-zinc-800">Capability</th>
                  <th className="text-left px-4 py-3 text-zinc-300 font-medium border-b border-zinc-800">Exists Today</th>
                  <th className="text-left px-4 py-3 text-zinc-300 font-medium border-b border-zinc-800">Gap</th>
                </tr>
              </thead>
              <tbody className="text-zinc-400">
                <tr className="border-b border-zinc-800">
                  <td className="px-4 py-3 text-zinc-300 font-medium">Agent-to-tool</td>
                  <td className="px-4 py-3">MCP, function calling</td>
                  <td className="px-4 py-3">Solved. Not the problem.</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="px-4 py-3 text-zinc-300 font-medium">Agent identity</td>
                  <td className="px-4 py-3">Nothing standard</td>
                  <td className="px-4 py-3">No way for an agent to prove delegation</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="px-4 py-3 text-zinc-300 font-medium">Agent payments</td>
                  <td className="px-4 py-3">Manual API keys per provider</td>
                  <td className="px-4 py-3">No delegated, scoped, auditable payment</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="px-4 py-3 text-zinc-300 font-medium">Agent comms</td>
                  <td className="px-4 py-3">Twilio, SendGrid (human-oriented)</td>
                  <td className="px-4 py-3">No unified agent-native message envelope</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="px-4 py-3 text-zinc-300 font-medium">Agent permissions</td>
                  <td className="px-4 py-3">Per-platform, bespoke</td>
                  <td className="px-4 py-3">No portable, verifiable permission policy</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-zinc-300 font-medium">Agent actions</td>
                  <td className="px-4 py-3">Browser automation (fragile, siloed)</td>
                  <td className="px-4 py-3">No shared adapter registry or standard intent format</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed">
            The tools exist in pieces. Email APIs, payment processors, identity providers. What&apos;s missing is the protocol that unifies them under a single, agent-native interface. Today&apos;s integrations are human-oriented: they assume a person is clicking buttons, entering credentials, confirming transactions. The Agent Protocol Layer makes these interactions first-class for software agents.
          </p>

          {/* 6. Why Open */}
          <h2 className="text-white font-semibold text-xl mt-12 mb-2">6. Why Open</h2>

          <p className="leading-relaxed">
            The usual argument for open protocols is interoperability. That&apos;s true but insufficient. The real argument is about <em className="text-zinc-300">who agents can serve</em>.
          </p>

          <p className="leading-relaxed">
            A proprietary protocol has a business model problem: it needs to charge for access. That means gatekeeper economics. Every adapter, every payment rail, every communication channel becomes a revenue opportunity for the protocol owner. The result: agents work well for enterprises that can afford the connectors, and poorly for everyone else.
          </p>

          <p className="leading-relaxed">
            This matters because agent capabilities are about to become commodity. The models are converging. Within two years, the differentiator between agent platforms will not be intelligence, it will be <em className="text-zinc-300">reach</em>: how many systems can your agent interact with? A proprietary protocol fragments reach by design. An open protocol maximizes it.
          </p>

          <p className="leading-relaxed">
            The protocol spec and reference implementations are Apache 2.0. The business model sits above the protocol: managed infrastructure for teams that don&apos;t want to run their own identity resolvers and payment gateways, plus enterprise compliance tooling. The protocol gets adopted because it&apos;s free. The company gets paid because operating infrastructure is work most teams don&apos;t want to do.
          </p>

          {/* 7. Next Steps */}
          <h2 className="text-white font-semibold text-xl mt-12 mb-2">7. Next Steps</h2>

          <p className="leading-relaxed">
            This is a draft specification. The primitives are defined; the implementations are not.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mt-4">
            <p className="text-zinc-300 font-medium mb-3">What&apos;s needed</p>
            <ul className="text-sm space-y-2">
              <li><span className="text-zinc-300">1.</span> Reference implementation of Identity + Permissions (the foundation everything else builds on)</li>
              <li><span className="text-zinc-300">2.</span> Adapter registry with at least three verified adapters as proof of concept</li>
              <li><span className="text-zinc-300">3.</span> Payment gateway for two providers (Stripe + one mobile money provider)</li>
              <li><span className="text-zinc-300">4.</span> Communication gateway for email + one messaging platform</li>
              <li><span className="text-zinc-300">5.</span> SDK in Python and TypeScript</li>
              <li><span className="text-zinc-300">6.</span> Security audit of the identity, permission, and credential isolation model</li>
            </ul>
          </div>

          <p className="leading-relaxed mt-6 font-medium text-zinc-300">
            The protocol works when the farmer in Kenya and the enterprise in Frankfurt use the same five primitives. That only happens if it&apos;s open, and if it&apos;s built by more than one person.
          </p>

        </section>

        <hr className="border-zinc-800 my-10" />

        <div className="text-center text-sm text-zinc-500">
          <p>Licensed under Apache 2.0</p>
        </div>

        <div className="mb-10 mt-10">
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">Related posts</p>
          <div className="space-y-3">
            <Link href="/blog/claude-code-context" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              Why Claude Code is my new best friend &rarr;
            </Link>
            <Link href="/blog/clawdbot-hinge" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              Clawdbot killed my Hinge date &rarr;
            </Link>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            href="/blog"
            className="px-5 py-2.5 border border-zinc-700 rounded-lg hover:border-white hover:text-white transition-colors text-sm"
          >
            All posts
          </Link>
        </div>
      </div>
    </article>
  );
}
