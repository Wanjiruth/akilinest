/**
 * Founder-led articles for the Teams side of the site.
 *
 * Rules for anything added here: no invented statistics, no fabricated client
 * examples, and every external figure carries its source in the text so a
 * reader can check it. Where something is our opinion, it reads as opinion.
 */

export type InsightSection = {
  heading?: string;
  paragraphs: string[];
};

export type InsightAudience = "workplace" | "educators" | "parents";

export type InsightPost = {
  slug: string;
  title: string;
  description: string;
  audience: InsightAudience;
  date: string;
  readTime: string;
  sections: InsightSection[];
};

export const AUDIENCE_LABELS: Record<InsightAudience, string> = {
  workplace: "Workplace teams",
  educators: "Educator teams",
  parents: "For parents",
};

export const insights: InsightPost[] = [
  {
    slug: "ai-data-safety-rules-for-teams-kenya",
    title: "What should a workplace team never put into a public AI tool?",
    description:
      "A short, practical list your team can agree on in one meeting, and the reasoning behind each item.",
    audience: "workplace",
    date: "2026-08-31",
    readTime: "7 min",
    sections: [
      {
        paragraphs: [
          "Most teams have never had this conversation. Someone starts using an AI assistant because it saves them an hour, a colleague sees it and copies the habit, and within a few months the whole department is pasting work into a tool nobody has agreed the rules for.",
          "The problem is rarely a careless person. It is that nobody has ever written down what is in bounds. This is the list we work through with teams, and the reasoning behind each item, so you can hold the same conversation without us.",
        ],
      },
      {
        heading: "Start with what a public tool actually is",
        paragraphs: [
          "A public AI tool is one where you signed up with an email address and agreed to terms nobody read. The free and personal tiers of the major assistants are all in this category. Some of them use what you type to improve their models unless you turn that off, and the setting is usually buried.",
          "This is different from a paid business or enterprise tier, where the contract normally says your inputs are not used for training. It is different again from a tool your organisation has procured with a signed data processing agreement. Those distinctions matter, and most staff have no idea which category the tab they have open belongs to.",
          "So the first thing to establish is not a rule but a fact: which tools does your team actually use, and on which tier.",
        ],
      },
      {
        heading: "The list itself",
        paragraphs: [
          "Personal data about identifiable people. Names, phone numbers, ID numbers, addresses, medical details, staff records, learner records. Under Kenya's Data Protection Act 2019, personal data carries obligations that do not disappear because a tool made the work faster. If a person could be identified from what you are pasting, it does not go in.",
          "Anything covered by a client confidentiality clause. Most professional services contracts contain one, and it almost never carves out an exception for AI assistants. Check before, not after.",
          "Unpublished commercial information. Pricing you have not released, proposals in progress, financials, acquisition talk, anything under embargo. The risk here is less about a leak and more about you having no idea where it now lives.",
          "Credentials and keys of any kind. Passwords, API keys, access tokens, database strings. This should be obvious and it keeps happening, usually inside a longer block of pasted text where nobody noticed them.",
          "Whole source documents when a paragraph would do. This one is a habit rather than a category. Pasting an entire contract to ask about one clause exposes forty pages to answer a question about one.",
        ],
      },
      {
        heading: "The rule that covers what the list misses",
        paragraphs: [
          "No list survives contact with real work, so give the team a test they can apply to anything not on it. We use this one: would you be comfortable if this text appeared in a screenshot on a public forum, attributed to your organisation?",
          "It is blunt, but it is fast, and it works on the cases nobody anticipated. If the answer is no, the work either needs anonymising first or a tool with a contract behind it.",
        ],
      },
      {
        heading: "Anonymise rather than abstain",
        paragraphs: [
          "The failure mode of a strict policy is not that people follow it. It is that they ignore it quietly, because the tool genuinely helps and the rule feels absolute.",
          "A better answer for most day-to-day work is to strip the identifying detail and keep the shape of the task. Replace the client's name with Client A. Take out the account numbers. Change the specific figures to representative ones. You lose almost nothing, because what you actually wanted was help with structure, tone or logic, and none of that needed the real names.",
          "Teach the substitution and most of the risk goes away without anyone having to abstain.",
        ],
      },
      {
        heading: "Decide who to ask",
        paragraphs: [
          "Every list produces edge cases. The policy is only useful if there is a named person to bring them to and a norm that asking is welcome rather than an admission of ignorance.",
          "In smaller organisations this is usually whoever owns operations or compliance. It matters less who it is than that everyone knows, and that the answer gets written back into the list so the same question is not asked four times.",
        ],
      },
      {
        heading: "Write it down and put it where the work happens",
        paragraphs: [
          "A rule that lives in a slide deck from an induction session is not a rule. Put the list where people already are: pinned in the team channel, in the onboarding document, on one page rather than fifteen.",
          "One page is the right length. If it runs longer, it will not be read, and an unread policy is worse than none because it creates the impression of control without any.",
        ],
      },
      {
        heading: "Where this fits in what we do",
        paragraphs: [
          "Agreeing this list is part of the AkiliNest Custom Playbook, alongside the approved tool stack for each role and the quality checks that go with it. Teams tend to find the conversation easier with someone outside the organisation running it, because it stops being about who has been doing it wrong.",
          "If you would rather run it yourselves, this article is the agenda. Take an hour, work through the list, name the person to ask, and put the result somewhere people will actually see it.",
        ],
      },
    ],
  },
  {
    slug: "how-to-use-ai-safely-at-work-kenya",
    title: "How Kenyan teams can use AI safely in everyday work",
    description:
      "Kenya leads the world in AI use and almost none of it has been formally taught. Here is what safe, useful adoption looks like for an ordinary team.",
    audience: "workplace",
    date: "2026-08-31",
    readTime: "8 min",
    sections: [
      {
        paragraphs: [
          "Kenya has the highest rate of ChatGPT use of any country in the world. According to the DataReportal and Meltwater Global Digital Report 2025, 42.1% of Kenyan internet users aged 16 and over had used it in the past month, ahead of the UAE, Israel and well ahead of the United States at 19.1%.",
          "That figure is usually reported as good news, and in one sense it is. But adoption and capability are different things. Almost none of that use has been formally taught, which means most Kenyan teams are running an unmanaged experiment: high usage, no shared standard, and no agreement on what the tools should touch.",
          "Safe adoption is not about slowing that down. It is about deciding four things.",
        ],
      },
      {
        heading: "One: decide what AI is allowed to touch",
        paragraphs: [
          "The instinct is to start with tools. Start with tasks instead. Take a week of your team's actual work and sort it into three piles.",
          "Work where AI is clearly useful and the stakes are low: first drafts, summarising long documents, restructuring notes, rewriting something for a different audience. Mistakes here are visible and cheap.",
          "Work where AI can help but a person must check: anything going to a client, anything with numbers in it, anything that will be quoted back to you. Use the tool, then verify.",
          "Work where AI has no business: final legal or medical judgement, anything involving personal data you cannot anonymise, and any decision about a specific person's employment, grades or entitlements.",
          "Most teams have never drawn this line explicitly, so everyone draws it privately and differently.",
        ],
      },
      {
        heading: "Two: agree what never goes in",
        paragraphs: [
          "Personal data about identifiable people, client-confidential material, unpublished commercial information, credentials. Kenya's Data Protection Act 2019 does not stop applying because a task got faster.",
          "The practical version of this rule is not abstinence, it is substitution. Strip the names and the account numbers and keep the shape of the problem. You almost always get the same help.",
        ],
      },
      {
        heading: "Three: check the output like you would a junior's work",
        paragraphs: [
          "These tools produce fluent text regardless of whether the content is correct. Fluency reads as confidence, which is exactly why unchecked output is dangerous in a way a hesitant draft from a new colleague is not.",
          "Three checks catch most of it. Are the facts and figures verifiable somewhere other than the tool? Does it sound like your organisation rather than like generic international English? Is anything asserted that you would not personally defend in a meeting?",
          "The third one matters most. If nobody on the team is willing to defend a sentence, it should not go out with your name on it.",
        ],
      },
      {
        heading: "Four: make the useful version reusable",
        paragraphs: [
          "Most teams treat every AI interaction as disposable. Someone works out a good approach for a monthly report, uses it once, and rebuilds it from scratch the following month.",
          "The compounding value is in capture. When something works, save the prompt with a note on what it is for, and put it where the team can find it. After a few months this becomes the most valuable thing you own from the whole exercise, because it encodes what worked in your context rather than in a tutorial.",
        ],
      },
      {
        heading: "What tends to go wrong",
        paragraphs: [
          "The most common failure is not a data breach. It is that the whole thing quietly fades. A workshop happens, people are enthusiastic for a fortnight, and then the pressure of the actual week resumes and everyone reverts.",
          "The second most common is inconsistency: one person produces AI-assisted work of a completely different standard and voice from their colleague, and the team's output stops being recognisable as coming from one organisation.",
          "Both are solved the same way. Write down what was agreed, and check a month later whether it is being used.",
        ],
      },
      {
        heading: "A reasonable first month",
        paragraphs: [
          "Week one: list the work that repeats. Not what you wish you did, what actually filled the week.",
          "Week two: pick two tasks from the useful-and-low-stakes pile and have the team do them with AI, together, on real examples.",
          "Week three: write the one-page list of what never goes in, and name the person to ask about edge cases.",
          "Week four: collect what worked into a shared place, and agree who keeps it current.",
          "That is a month, it costs nothing but attention, and it puts you ahead of most organisations who are still describing AI as a priority without anyone having decided anything.",
        ],
      },
    ],
  },
  {
    slug: "how-to-build-ai-workflows-for-teams",
    title: "How to turn repetitive team work into practical AI workflows",
    description:
      "Finding the work that repeats every week, and turning it into something the whole team reuses rather than a one-off prompt.",
    audience: "workplace",
    date: "2026-08-31",
    readTime: "7 min",
    sections: [
      {
        paragraphs: [
          "There is a large difference between a person who uses AI well and a team that has a workflow. The first is one colleague being unusually productive. The second is a repeatable thing anyone can pick up, which survives that colleague going on leave.",
          "Almost everyone stops at the first. Here is how to get to the second.",
        ],
      },
      {
        heading: "Find the work that actually repeats",
        paragraphs: [
          "Ask the team to write down everything they did last week that they will do again this week. Not the interesting projects, the recurring plumbing: the weekly report, the standard client update, the meeting notes, the same three types of email.",
          "Two things usually surprise people. The recurring work is a larger share of the week than anyone thought, and different people are doing the same task in noticeably different ways.",
          "That second observation is where the value is. Where two people have different methods for the same task, one is usually better, and nobody has ever compared them.",
        ],
      },
      {
        heading: "Pick the boring one first",
        paragraphs: [
          "The temptation is to start with the most interesting task. Start with the most frequent and least contentious one instead, because you are building the team's confidence in the method as much as solving the task.",
          "Good first candidates: turning meeting notes into decisions and actions, drafting a recurring status update, summarising a long document to a standard shape, converting a rough brief into a structured outline.",
          "Bad first candidates: anything client-facing that is politically sensitive, anything requiring judgement about people, anything where the current process is already contested.",
        ],
      },
      {
        heading: "Build it from a good example, not from theory",
        paragraphs: [
          "Take the best existing version of the output, one your team already agrees is good, and work backwards. What does it contain, in what order, in what tone, and what does it deliberately leave out?",
          "That description is most of the workflow. The prompt is just that description written down, plus the source material. Teams that skip this step end up prompting for a generic version of the document rather than their version.",
        ],
      },
      {
        heading: "Write down what good looks like",
        paragraphs: [
          "A workflow that only produces a draft is half a workflow. The other half is the check.",
          "For each one, agree what must be true before the output leaves the team. Figures verified against source. Names and titles correct. Nothing asserted that we cannot support. Tone matches how we write.",
          "Attach the checks to the workflow itself, so the person using it in three months has both parts.",
        ],
      },
      {
        heading: "Put it where the work happens",
        paragraphs: [
          "A workflow in someone's personal notes is not a team workflow. It needs a shared location, a name people will search for, and one line at the top saying what it is for and when not to use it.",
          "Name workflows after the task, not the tool. What survives a change of tool is the description of the work; what does not is anything tied to a particular interface that will look different next year.",
        ],
      },
      {
        heading: "Review after a month, honestly",
        paragraphs: [
          "A month is long enough for reality to intervene. Ask which workflows are actually being used, which have been quietly abandoned, and why.",
          "Abandonment is information, not failure. Usually it means the workflow was built for how the work was described rather than how it is done. Fix it or delete it. A library full of unused workflows teaches people that the library is not worth checking.",
        ],
      },
      {
        heading: "What this looks like with us",
        paragraphs: [
          "This is the core of the AI Workflow Bootcamp: discovery on your real work, live sessions where the team builds workflows on their own tasks, and a 30-day clinic afterwards, because the month after a workshop is where adoption is usually won or lost.",
          "The article above is the method. You can run it yourselves, and some teams should. What an outside facilitator mostly adds is the willingness to ask why two people do the same task differently, which is an awkward question to ask your own colleagues.",
        ],
      },
    ],
  },
  {
    slug: "ai-for-teachers-kenya",
    title: "AI for teachers in Kenya: practical uses beyond lesson planning",
    description:
      "Lesson plans are the obvious use and the least interesting one. The bigger wins are in feedback, differentiation and the administrative load.",
    audience: "educators",
    date: "2026-08-31",
    readTime: "8 min",
    sections: [
      {
        paragraphs: [
          "Every introduction to AI for teachers starts with lesson planning, and there is a reason: it is the most visible part of the job and the easiest to demonstrate. It is also, in our experience, not where most of the time goes.",
          "TSC and Microsoft Elevate now offer free AI pathways for TSC-employed teachers, aligned to TPD and KePTS. If your staff are eligible, use them. What follows is about the uses that come after the introduction, and where the hours actually sit.",
        ],
      },
      {
        heading: "Feedback, which is where the hours go",
        paragraphs: [
          "Marking a class set of extended responses is the single largest recurring block in most teachers' weeks, and the quality of feedback usually degrades as the pile shrinks. Not because the teacher stops caring, but because it is the fortieth script.",
          "The useful pattern is not to have AI mark the work. It is to have it help you write feedback faster once you have judged the work yourself. You decide the grade and the two things this learner needs to do differently; the tool helps you express that clearly, at length, and in the same voice for script forty as for script one.",
          "The line matters. Judgement stays with the teacher, expression gets assistance. Cross that line and you are grading learners with a tool that cannot understand what it read.",
        ],
      },
      {
        heading: "Differentiation, which is usually the thing that gets dropped",
        paragraphs: [
          "Most teachers know that a class of fifty contains learners who need the same content at three different levels. Most also know that producing three versions of a worksheet is not realistic on a Tuesday night.",
          "This is the strongest genuine use we see. Take the resource you already made, and produce a simplified version, an extended version, and a version with the reading level lowered but the concepts intact. It is a few minutes rather than a few hours, and it is work that was previously not happening at all.",
          "The check is the same as always: read all three before they reach learners. A simplified version can quietly lose the point of the lesson.",
        ],
      },
      {
        heading: "The administrative layer nobody trained you for",
        paragraphs: [
          "Reports to parents. Departmental returns. Minutes. Letters home about a trip. Schemes of work reformatted for a template that changed. None of this is teaching, and all of it consumes teaching time.",
          "Comment banks for reports are an obvious case. A teacher who has decided what to say about a learner can get twenty ways to say it well, then choose and adapt. The risk is producing generic comments that could describe anyone, which parents notice immediately. Feed in the specific observation and the tool has something real to work with.",
        ],
      },
      {
        heading: "Explaining the same idea five different ways",
        paragraphs: [
          "The hardest part of teaching a concept is that the explanation which works for most of the class fails for a few, and inventing a fourth analogy on the spot is difficult.",
          "Asking for several explanations of the same concept at different levels of abstraction, before the lesson, gives you options in your pocket. This is preparation, not delivery, and it is one of the few uses where the tool is genuinely adding something a busy teacher could not easily produce alone.",
        ],
      },
      {
        heading: "What learner data means for all of this",
        paragraphs: [
          "None of the above requires putting a named learner into a public tool, and none of it should.",
          "Kenya's Data Protection Act 2019 treats personal data seriously, and children's data more so. Learner names, marks tied to individuals, medical or behavioural notes, and anything from a file should not be pasted into a consumer AI account.",
          "The workable version is to anonymise. Learner A. A learner who consistently does this. The advice you get back is identical, because the tool was never using the name.",
        ],
      },
      {
        heading: "What a school should decide, not each teacher",
        paragraphs: [
          "The pattern we see most often is that individual teachers work this out privately and inconsistently, so two classrooms in the same corridor have completely different practices and neither has been discussed.",
          "Four things are better decided at institution level: which tools staff may use and on which accounts, what learner information never goes in, what teachers tell learners about their own AI use, and what learners are permitted to do. A department that has agreed those four can move quickly. One that has not will keep having the same argument.",
        ],
      },
      {
        heading: "Where AkiliNest fits",
        paragraphs: [
          "We build the institutional layer: the readiness audit, the integration playbook, and hands-on cohorts where teachers work on their own schemes of work rather than on demonstration material. We work with schools in Nairobi and across Kenya, including private and international schools whose staff sit outside the TSC scheme.",
          "If your teachers are eligible for the free TSC pathways, start there. What they will not do is get your department into one room agreeing how your school handles this. That part still has to happen.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-ai-bootcamp-for-kids-nairobi",
    title: "How parents can choose an AI bootcamp for their child",
    description:
      "The questions worth asking any programme before you enrol, including ours.",
    audience: "parents",
    date: "2026-08-31",
    readTime: "6 min",
    sections: [
      {
        paragraphs: [
          "Holiday programmes advertising AI for children have multiplied quickly in Nairobi, and the marketing has converged. Creativity. Future skills. Coding. It is genuinely difficult to tell from a flyer whether a programme is any good.",
          "These are the questions we would ask, and we have tried to write them so they are useful whichever programme you choose.",
        ],
      },
      {
        heading: "What will my child have made by the last day?",
        paragraphs: [
          "A programme that knows what it is doing answers this specifically: a finished story, a working prototype, a research poster. A weaker one answers with feelings, saying your child will be inspired or exposed to technology.",
          "Finished work matters because a child who has completed something can explain it, and explaining it is where the learning consolidates. Exposure without production leaves nothing behind by the new term.",
        ],
      },
      {
        heading: "Does the child think first, or prompt first?",
        paragraphs: [
          "This is the question we care most about, and we will declare our bias plainly: it is the whole basis of how we teach.",
          "There is a real difference between a session where children type a request and collect whatever comes back, and one where they form their own idea, put it in their own words, and then use AI to challenge or extend it. The first produces children who are fast at getting output. The second produces children who can tell you why they made the choices they made.",
          "Ask for a concrete example of a session. The answer will tell you which one you are buying.",
        ],
      },
      {
        heading: "How many children per facilitator, and what ages together?",
        paragraphs: [
          "Group size determines how much attention any child gets, and it is the most common place a low price is coming from.",
          "Age banding matters as much. A nine-year-old and a fifteen-year-old need genuinely different work. A programme running one set of material for everyone aged 8 to 17 is designing for the middle.",
        ],
      },
      {
        heading: "What accounts will my child use, and what happens to their work?",
        paragraphs: [
          "Most AI tools have minimum age requirements and most were not built with children in mind. It is reasonable to ask which tools will be used, whether your child needs an account, whether anything they create or upload is retained, and what supervision looks like while they are using them.",
          "A programme that has thought about this will answer straightforwardly. One that has not will be vague, and vagueness is the answer.",
        ],
      },
      {
        heading: "What comes home to me?",
        paragraphs: [
          "You will want to continue the conversation after it ends, and you cannot do that if you do not know what happened.",
          "The good programmes send something to the parent as well as the child: the work itself, a note on what was covered, or suggestions for what to ask about. Not a certificate. Something you can actually use at the dinner table.",
        ],
      },
      {
        heading: "How AkiliNest answers these",
        paragraphs: [
          "Our creative AI bootcamps run during the school holidays at heARTspace, Kabarnet Road, Nairobi, for children aged 8 to 17, in four age stages: Sprouts, Explorers, Builders and Innovators. The next intake runs November to December 2026.",
          "Every session follows the same cycle: the child forms an idea and writes it in their own words, then brings AI in to critique and expand it, then presents work they can defend without the tool in front of them. Each stage produces finished work, from illustrated stories at Sprouts to real prototypes at Builders and Innovators.",
          "For fees, group sizes and what a particular stage covers, message us on WhatsApp at 0702 820 845 or use the contact page, and ask us the questions above. If our answers are not specific, that tells you something too.",
        ],
      },
    ],
  },
];

export function findInsight(slug: string): InsightPost | undefined {
  return insights.find((post) => post.slug === slug);
}
