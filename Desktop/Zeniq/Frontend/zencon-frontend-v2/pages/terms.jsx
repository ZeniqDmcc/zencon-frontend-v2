import Heading1 from "@/../../components/Atoms/Headings/HeadingH1";
import Image from "next/image";
import Link from "next/link";
import HeadingH4 from "../components/Atoms/Headings/HeadingH4";
import Navbar from "../components/Navbar/Navbar";
import rio023 from "/assets/Assets_home/rio023.svg";
import Heading from "../components/Atoms/Headings/Heading";

export default function Terms() {
  return (
    <div className="terms bg-[#010020]">
      <Navbar />
      <div className="max-w-6xl flex flex-col sm:gap-8 gap-6 lg:pb-32 pb-[66px] mx-auto text-white lg:pt-[210px] pt-[150px] sm:px-10 px-7">
        <div className="flex 1024px:w-[60%] mx-auto justify-center">
          <Image src={rio023} alt="ZENCON 023" />
        </div>

        <div className="flex justify-center pb-3 text-center sm:pb-8 sm:pt-3 lg:px-24">
          <Heading1 text="General Terms and Conditions & Participation Agreement" />
        </div>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          This General Terms and Conditions & Participation Agreement
          (hereinafter <b>{"Agreement"}</b>) constitutes a binding agreement
          between each Participant, as defined below, and Zeniq (hereinafter{" "}
          <b>“Zeniq”</b>). Please read them carefully.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          By registering and participating in {`Zeniq's`} Hackathon, the
          Participant (hereinafter <b>“Participant”</b>) confirms to have read,
          understood and accepted this Agreement.
        </p>

        <div>
          <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
            For the avoidance of any doubt, the Participant acknowledges and
            agrees:
          </p>
          <ul className="640px:mt-[20px] 640px:border 640px:border-[#87FF4F] 640px:w-[90%] 640px:mx-auto 640px:py-[15px] 640px:px-[34px] 640px:flex 640px:flex-col 640px:gap-[15px] 640px:p-5 sm:pl-7 list-disc leading-[30px] text-[#fff] text-[18px] sm:text-left font-light 940px:leading-[25px]">
            <li>
              To abide by the terms and conditions of the Agreement which is a
              binding legal agreement between the Participant and Zeniq.
            </li>
            <li>
              To be bound by the decisions of Zeniq and its jury in connection
              with the Hackathon and Zeniq challenges.
            </li>
          </ul>
        </div>

        <HeadingH4 text="ARTICLE 1 – ORGANIZATION OF ZENCON" />
        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          The purpose of this Agreement is to regulate the terms and conditions
          for the participation in the hackathon called ZENCON 2023 (hereinafter{" "}
          <b>“ZENCON”</b>).
        </p>

        <HeadingH4 text="ARTICLE 2 – OBJECTIVE OF ZENCON" />
        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          The aim of ZENCON is to develop, design, build and demo a real-world
          software solution, in teams and over a limited amount of time, around
          the following topic: Zeniq Blockchain.{" "}
        </p>

        <HeadingH4 text="ARTICLE 3 – OBJECTIVE OF ZENCON" />
        <div>
          <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
            The hackathon will take place from September 16th 2023 to September
            21st 2023 on Copacabana (Rio de Janeiro, Brazil).{" "}
          </p>
          <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
            ZENCON is open to all individuals who:
          </p>
        </div>

        <ul className="640px:border 640px:border-[#87FF4F] 640px:w-[90%] 640px:mx-auto 640px:py-[15px] 640px:px-[34px] 640px:flex 640px:flex-col 640px:gap-[15px] 640px:p-5 sm:pl-7 font-HeronSans leading-[30px] text-[#fff] text-[18px] sm:text-left font-light 940px:leading-[25px]">
          <li>(i) are over the age of 18;</li>
          <li>(ii) own a blockchain-based wallet address;</li>
          <li>
            (iii) have IT skills, technical skills, design skills, or marketing
            skills; and{" "}
          </li>
          <li>
            (iv) have their own computer hardware in working order throughout
            the duration of ZENCON (hereinafter <b>“Participant/s”</b>).
          </li>
        </ul>

        <div>
          <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
            Participation in ZENCON is free of charge and without any purchase
            obligation.{" "}
          </p>
          <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
            During ZENCON, meals will be available to Participants for
            breakfast, lunch, and dinner.
          </p>
          <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
            Employees and external service providers of Zeniq and/or their
            affiliates, and members of their families, as well as anyone who has
            directly or indirectly contributed to the conception, organization,
            or realization of ZENCON, are ineligible to take part in ZENCON.
          </p>
        </div>

        {/* <HeadingH4  /> */}
        <Heading level="4">Phase 1: Registration process</Heading>

        <ul className="640px:border 640px:border-[#87FF4F] 640px:w-[90%] 640px:mx-auto 640px:py-[15px] 640px:px-[34px] 640px:flex 640px:flex-col 640px:gap-[15px] 640px:p-5 sm:pl-7 list-disc font-HeronSans leading-[30px] text-[#fff] text-[18px] sm:text-left font-light 940px:leading-[25px]">
          <li>
            <u className="font-HeronSans">Date:</u> between May 4, 2023, and July 15, 2023.
          </li>
          <li>
            Website:{" "}
            <Link href=" www.zencon.io">
              <>
                <u className="font-HeronSans">www.zencon.io</u>
              </>
            </Link>{" "}
          </li>
          <li>
            Object: every person wishing to participate can register online on
            the dedicated website for ZENCON accessible at the following
            address:{" "}
            <Link href="www.zencon.io">
              <>
                <u className="font-HeronSans">www.zencon.io</u>
              </>
            </Link>
            . Registrants must provide the following information: last name,
            first name, date of birth, address, phone number, email, and their
            profile for the purpose of ZENCON, as suggested on the website. This
            information is required for the completion of their application.{" "}
          </li>
        </ul>

        <div>
          <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
            Each candidate guarantees that the information entered during
            his/her application to ZENCON is complete and accurate. Any false,
            incorrect, or incomplete information will automatically result in
            the application being rejected.
          </p>
          <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
            Participation in ZENCON is strictly personal and the Participant
            cannot, under any circumstances, be replaced. Each registration in
            the hackathon is individual, and only one registration per person is
            allowed.
          </p>
          <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
            Zeniq reserves the right to accept or reject an application at any
            time in whole or in part without assigning any reason.
          </p>
        </div>

        <HeadingH4 text="Phase 2: Pre-selection" />
        <ul className="640px:border 640px:border-[#87FF4F] 640px:w-[90%] 640px:mx-auto 640px:py-[15px] 640px:px-[34px] 640px:flex 640px:flex-col 640px:gap-[15px] 640px:p-5 sm:pl-7 list-disc font-HeronSans leading-[30px] text-[#fff] text-[18px] sm:text-left font-light 940px:leading-[25px]">
          <li>Date: latest by the July 17, 2023.</li>
          <li>
            Object: Top 200 registrants will be selected to participate onsite
            at ZENCON.
          </li>
        </ul>

        <HeadingH4 text="Phase 3: Selection" />
        <ul className="640px:border 640px:border-[#87FF4F] 640px:w-[90%] 640px:mx-auto 640px:py-[15px] 640px:px-[34px] 640px:flex 640px:flex-col 640px:gap-[15px] 640px:p-5 sm:pl-7 list-disc font-HeronSans leading-[30px] text-[#fff] text-[18px] sm:text-left font-light 940px:leading-[25px]">
          <li>Date: latest by July 27, 2023</li>
          <li>
            Object: The top 200 registrants will be selected to participate at
            ZENCON Rio 2023 (16-21 September, Rio de Janeiro).
          </li>
        </ul>

        <HeadingH4 text="Phase 4: Beginning of ZENCON" />
        <ul className="640px:border 640px:border-[#87FF4F] 640px:w-[90%] 640px:mx-auto 640px:py-[15px] 640px:px-[34px] 640px:flex 640px:flex-col 640px:gap-[15px] 640px:p-5 sm:pl-7 list-disc font-HeronSans leading-[30px] text-[#fff] text-[18px] sm:text-left font-light 940px:leading-[25px]">
          <li>Date: on September 16, 2023.</li>
          <li>
            Location: Fairmont Rio de Janeiro Copacabana Hotel (Rio de Janeiro,
            Brazil).
          </li>
          <li>
            Object: Participants will meet and form teams of two (2) to six (6)
            Participants (hereinafter <u className="font-HeronSans">“Team/s”</u> ) to focus on a single
            project and develop a prototype (hereinafter <u className="font-HeronSans">“Solution”</u> ). A
            Participant cannot be a part of more than one Team.{" "}
          </li>
        </ul>

        <HeadingH4 text="Phase 5: Challenge begins" />
        <ul className="640px:border 640px:border-[#87FF4F] 640px:w-[90%] 640px:mx-auto 640px:py-[15px] 640px:px-[34px] 640px:flex 640px:flex-col 640px:gap-[15px] 640px:p-5 sm:pl-7 list-disc font-HeronSans leading-[30px] text-[#fff] text-[18px] sm:text-left font-light 940px:leading-[25px]">
          <li>Date: on September 17, 2023.</li>
          <li>
            Location: Fairmont Rio de Janeiro Copacabana Hotel (Rio de Janeiro,
            Brazil).
          </li>
          <li>
            Object: Teams shall create a solution to develop, design, build and
            demo a real-world software solution, in teams and over a limited
            amount of time, around the following topic: Zeniq Blockchain. Teams
            shall submit their solution before September 20th 2023 at 10am BRT
            (a.k.a., UTC-03:00).
          </li>
        </ul>

        <HeadingH4 text="Phase 6: Presentation of the Solution" />
        <ul className="640px:border 640px:border-[#87FF4F] 640px:w-[90%] 640px:mx-auto 640px:py-[15px] 640px:px-[34px] 640px:flex 640px:flex-col 640px:gap-[15px] 640px:p-5 sm:pl-7 list-disc font-HeronSans leading-[30px] text-[#fff] text-[18px] sm:text-left font-light 940px:leading-[25px]">
          <li>Date: on September 20, 2023.</li>
          <li>
            Location: Fairmont Rio de Janeiro Copacabana Hotel (Rio de Janeiro,
            Brazil).
          </li>
          <li>
            Object: From 10:30am, each Team will present its Solution to the
            jury for a duration which will be determined according to the number
            of developed solutions and which will not exceed 5 minutes,
            including 3 minutes of demo and 2 minutes of questions/answers with
            the jury.{" "}
          </li>
        </ul>

        <HeadingH4 text="Phase 7: Jury’s selection and ZENCON results" />
        <div>
          <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
            Date: on September 20, 2023, during the awards ceremony that shall
            start after 7:00pm.
          </p>
          <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
            <u className="font-HeronSans">Location</u>: Fairmont Rio de Janeiro Copacabana Hotel (Rio de
            Janeiro, Brazil).
          </p>
          <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
            Object: Jury’s deliberation and announcement of winners and prizes.
          </p>
        </div>

        <HeadingH4 text="ARTICLE 4 – DETERMINATION OF WINNERS" />
        <div>
          <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
            The top 5 best Solutions will be determined by a jury of 5 to 8
            members, who will rate the projects. The jury will be integrated by
            members of Zeniq and external stakeholders and will designate the
            winners during the award ceremony.
          </p>

          <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
            The winners will be selected from among the Participants who
            actually:{" "}
          </p>
        </div>

        <ul className="640px:border 640px:border-[#87FF4F] 640px:w-[90%] 640px:mx-auto 640px:py-[15px] 640px:px-[34px] 640px:flex 640px:flex-col 640px:gap-[15px] 640px:p-5 sm:pl-7 list-disc font-HeronSans leading-[30px] text-[#fff] text-[18px] sm:text-left font-light 940px:leading-[25px]">
          <li>
            Satisfy the conditions for participation as set forth in the present
            rules.
          </li>
          <li>Participated in the Hackathon session.</li>
          <li>
            Where present during the submission of their solution before the
            selected deadline, or – if need be – were excused by the other
            members of their Team.{" "}
          </li>
        </ul>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          The jury will select the winning Teams based on the following
          criteria:
        </p>
        <ul className="640px:border 640px:border-[#87FF4F] 640px:w-[90%] 640px:mx-auto 640px:py-[15px] 640px:px-[34px] 640px:flex 640px:flex-col 640px:gap-[15px] 640px:p-5 sm:pl-7 list-disc font-HeronSans leading-[30px] text-[#fff] text-[18px] sm:text-left font-light 940px:leading-[25px]">
          <li>Innovation and creativity</li>
          <li>Business impact, feasibility, and scalability</li>
          <li>Technology</li>
          <li>User experience: UI/UX interface/Aesthetics</li>
          <li>Presentation</li>
        </ul>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          Jury decisions are final and cannot be challenged.
        </p>

        <HeadingH4 text="ARTICLE 5 – PRIZES AWARDED" />
        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          <b>Digital monetary prizes:</b> a total of five prizes will be awarded
          for a total amount of one hundred thousand (100,000) USDC coins. Each
          of the five winning Teams will receive the sum of twenty thousand
          (20,000) USDC coins divided equally between each member of the winning
          Team.{" "}
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          The gained prizes are neither exchangeable nor refundable against
          their cash value. Zeniq reserves the right, if circumstances so
          require, to replace the prizes with others of equivalent value,
          without liability being incurred thereby and without assigning any
          reason.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          The prizes will be divided evenly amongst Participant team members.
          Zeniq is not responsible for any dispute among Teams or team
          Participants related to the prizes.{" "}
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          Participant is solely responsible for any applicable taxes for any
          prize.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          <b>Zeniq Launchpad program</b>: a shuttle platform program might be
          offered to further develop the project of the Team. Participation is
          voluntary. If a Team is offered by Zeniq to join the Zeniq Launchpad,
          the terms of the agreement will be agreed between the team members and
          Zeniq.
        </p>

        <HeadingH4 text="ARTICLE 6 – PRIZE ALLOCATION" />
        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          Monetary prizes will be sent by Zeniq to the winners within a maximum
          of thirty (30) calendar days from the end of ZENCON, to the address
          indicated by the winners.{" "}
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          If the address of a winner is unusable (illegible, incomplete, or
          erroneous), or does not comply with the FATF Travel Rule (i.e., is
          owner is identifiable), the latter will lose the profit of its prize.
        </p>

        <HeadingH4 text="ARTICLE 7 – COMPENSATION" />
        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          Participant waives all of his/her claims regarding compensation
          against Zeniq due to his/her participation to ZENCON (in particular
          with regards to costs incurred for participation such as transport,
          etc.) with the exception accommodation, and the meals offered, which
          will be supplied by Zeniq during the duration of ZENCON.{" "}
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          <u className="font-HeronSans">
            Drinks, meals and third services requested by Participants not
            included herein shall be borne by the Participant and will be
            charged either in situ or at the check-out to the credit card
            provided by the Participant when registering (i.e., checking-in) in
            the hotel.
          </u>
        </p>

        <HeadingH4 text="ARTICLE 8 – MODIFICATION, INTERRUPTION AND TERMINATION OF ZENCON" />
        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          Zeniq reserves the right to shorten, extend, modify, or terminate
          ZENCON, or a part of ZENCON at any time without incurring liability as
          a result thereof and without assigning any reason.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          In such case, Zeniq will provide notice thereof to the Participants by
          any means of its choice (including email and/or publication on the
          Website), and, if the need arises, will communicate to the
          Participants the new rules applicable or the new ending date of
          ZENCON, as the case may be. Each Participant may notify Zeniq by email
          that s/he refuses the new conditions of the Agreement, in which case
          s/he will be excluded from participating, which s/he expressly
          accepts. If no refusal is communicated to Zeniq within 48 hours, the
          new Agreement will be deemed to have been accepted by Participants.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          In case of a modification to this Agreement, cancellation, or
          interruption of ZENCON, or a reduction or an extension of its length,
          Zeniq waives all liability and Participants will not be entitled to
          any compensation.
        </p>

        <HeadingH4 text="ARTICLE 9 – FRAUD" />
        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          Zeniq may cancel all or part of participations in ZENCON if it appears
          that fraud has occurred in any form whatsoever, in particular computer
          fraud, during ZENCON. Zeniq reserves, in this case, the right not to
          award prizes to fraudsters, to disqualify the concerned Solution
          and/or to bring actions against the authors of these frauds. Zeniq
          shall not incur any responsibility towards the Participants because of
          the committed frauds.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          Under no circumstance will Zeniq be liable in case of damage, whether
          material or immaterial, caused during ZENCON and thereafter, to the
          Participants, to their computing equipment, or to the data, including
          consequences which may ensue from it on their personal, professional
          or commercial activity.{" "}
        </p>

        <HeadingH4 text="ARTICLE 10 – EXPLOITATION RIGHTS AND INTELLECTUAL PROPERTY" />
        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          Property rights to Solutions developed during ZENCON are reserved to
          Participants. Notwithstanding the foregoing, Participants agree to and
          hereby provide Zeniq a paid-up, royalty-free, perpetual,
          non-exclusive, worldwide license to use the Solution without any
          reference, liability, or compensation to the Participant.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          If the Participants wish to assign their rights, they shall first
          offer to Zeniq the option to acquire the rights in their Solution. The
          conditions of this assignment of rights shall be defined by way of a
          separate agreement between Zeniq and the Participants.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          Participants may receive access to certain proprietary software, APIs,
          and/or other copyrighted materials, including pictorial, audio, video
          and/or audiovisual content owned by Zeniq or its parent/affiliate
          companies, partners, or licensors. Participant acknowledges and agrees
          that the proprietary information is made available for use in
          developing a Solution and solving a challenge and not for any
          commercial purpose.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          During ZENCON, the Participants shall only use Zeniq proprietary
          information or third elements clear of any rights. The Solution shall
          not infringe any intellectual property right or image right. Each
          Participant warrants to Zeniq that their creation does not infringe in
          any way any third-party rights.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          By joining ZENCON, Participants expressly authorize Zeniq, for free,
          to publish, communicate, exhibit, and disclose orally, graphically or
          in writing, the Solutions presented during ZENCON. Each Participant
          agrees to be mediatized (portfolio, website, etc.) and authorizes
          Zeniq, for free, to present all the works realized on all the
          communication media used in support of this ZENCON as well as to
          mention names, first names and images of the Participants.{" "}
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          Participant shall not acquire any full or partial right of any kind on
          the name and trademark “ZENCON” nor on any names and/or brands
          associated with Zeniq, used alone, in association with or as part of
          another word or name, or any rights on trademarks, names or logos of
          Zeniq, or any of its associated or related companies.
        </p>

        <HeadingH4 text="ARTICLE 11 – IMAGE RIGHTS" />
        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          The Participants may be filmed or photographed during the event. By
          joining ZENCON, the Participants agree to the use and the distribution
          of their image by Zeniq, including for promotional events occurring
          after ZENCON. The production and distribution of films and photographs
          of the event will not lead to any compensation to the Participants.
        </p>

        <HeadingH4 text="ARTICLE 12 – CONFIDENTIALITY" />
        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          During ZENCON Participant may gain knowledge about certain
          confidential information (i.e., Zeniq business activities, products,
          services and/or technical expertise). Participant shall not divulge,
          use, or make copies of any confidential information, and acknowledges
          the confidentiality of certain Zeniq proprietary information and
          documents which have been shared with him/her throughout ZENCON.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          During the whole duration of ZENCON, the Participant will not directly
          or indirectly use or share any information with any third party,
          unless s/he has obtained a written authorization to do so, delivered
          by Zeniq beforehand. This applies to information shared with him/her
          by Zeniq or shared with him/her indirectly upon the execution of this
          Agreement.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          The Participant commits to delivering any document containing
          confidential or proprietary information shared with the Participant
          upon the execution of this Agreement, on Zeniq’s simple request.
        </p>

        <HeadingH4 text="ARTICLE 13 – PROTECTION OF PERSONAL DATA" />
        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          The collection and processing of personal data relating to the
          Participant by Zeniq is primarily intended to ensure that ZENCON will
          be properly completed and in particular to allow Zeniq to contact the
          winner and to award them the prizes in an efficient way and, if the
          case arises, to publish the list of the winners.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          Personal Data you submit when you participate in the Hackathon will be
          treated in accordance with Zeniq’s Privacy Policy, available at{" "}
          <Link href="https://zeniq.com/">https://zeniq.com/</Link> and
          applicable data protection laws.
        </p>

        <HeadingH4 text="ARTICLE 14 – LIABILITY RELEASE, RESPONSIBILITY, AND INDEMNITY" />
        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          Under no circumstance will Zeniq be liable for any direct, incidental,
          indirect, special, or consequential damages, whether material or
          immaterial, caused in connection with, arising out of or relating in
          any way to ZENCON and/or this Agreement. Participant shall indemnify
          and hold Zeniq and its officers, directors, employees, successors and
          assigns harmless against any claims, losses, damages, liabilities, and
          expenses (including reasonable attorneys’ and other professionals’
          fees) incurred by Zeniq in connection with, arising out of or relating
          in any way to ZENCON and/or this Agreement. Furthermore:
        </p>

        <ul className="640px:border 640px:border-[#87FF4F] 640px:w-[90%] 640px:mx-auto 640px:py-[15px] 640px:px-[34px] 640px:flex 640px:flex-col 640px:gap-[15px] 640px:p-5 sm:pl-7 list-disc font-HeronSans leading-[30px] text-[#fff] text-[18px] sm:text-left font-light 940px:leading-[25px]">
          <li>
            Zeniq reminds Participants about the characteristics, limitations
            and risks of the Internet network and accepts no responsibility for
            any consequences that may occur while they are connected to the
            event websites and during their participation in ZENCON.
          </li>

          <li>
            Zeniq shall not be made responsible if Participants cannot connect
            to the website of the event due to a technical fault or in the event
            of any problem linked namely and not exclusively to (i) network
            overload; (ii) an electric or human error (iii) any malicious
            intervention; (iv) an issue related to a phone line; (v) an issue
            related to hardware or software; (vi) a hardware or software
            malfunction; (vii) a case of emergency; (viii) disruptions that may
            affect the smooth running of ZENCON.
          </li>

          <li>
            It is the Participant’s responsibility to take the appropriate
            measures to protect his/her own data and/or software located on
            his/her computer equipment, against any violation. The Participant’s
            connection to the event websites and their participation in ZENCON
            is made under their own sole responsibility. Zeniq shall not be held
            responsible for any infection by potential viruses on the
            Participant’s computer equipment, or of the intrusion of a third
            party on their system.{" "}
          </li>

          <li>
            Zeniq shall not be held responsible if, for any reason, data related
            to a Participant’s registration doesn’t reach the company or is
            illegible or impossible to process.
          </li>

          <li>
            Zeniq reserves the right to exclude any Participant or person
            disrupting ZENCON’s smooth running. They reserve the right to use
            any recourse, including suing anyone suspected of cheating,
            falsifying, or disrupting the process described in the Terms and
            Conditions, or suspected of trying to accomplish such actions. Any
            Participant deemed by Zeniq to have disrupted ZENCON in any of the
            ways stated above, will be deprived of the right to obtain any
            prize, and no claim will be accepted consequently.
          </li>

          <li>
            Participants remain solely and entirely responsible for the damages
            caused by them or their equipment to goods or people during ZENCON,
            and they shall cover their risks by their own insurance and renounce
            any right to resort to Zeniq in that respect.
          </li>
        </ul>

        <HeadingH4 text="ARTICLE 15 – CODE OF CONDUCT" />
        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          Participation in ZENCON implies full acceptance without reservation of
          the Agreement.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          This document is accessible on the event website{" "}
          <Link href="www.zencon.io">www.zencon.io</Link> during the full
          duration of ZENCON.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          Zeniq reserves the right to modify this Agreement, including any and
          all terms and conditions at any time, at the sole discretion of Zeniq
          and without assigning any reason., and Participant waives the right to
          any claim or action due to, in whole or in part, any inaccuracy of, or
          modification of, or deletion of, any representation or warranty made
          under this Agreement.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          Failure by Zeniq to enforce the Agreement will not constitute a waiver
          of that provision or any other provisions of the Agreement.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          Any claim relating to ZENCON will be barred after the period of Three
          (3) months from the deadline for the participation submission
          stipulated in Article 3 - PARTICIPATION PROCESS{" "}
          {"Phase 1: Registration process"}.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          This Agreement shall be governed by and construed under the laws of
          Dubai International Financial Center {`("DIFC")`}, without giving
          effect to any principles of conflicts of law. The Parties agree to
          submit to the exclusive jurisdiction of the courts of the Dubai
          International Financial Centre (DIFC) for the resolution of any
          disputes arising out of or relating to this Agreement, whether
          contractual or non-contractual.
        </p>

        <p className="font-HeronSans leading-[30px] text-[#fff] text-[18px] text-center sm:text-left font-light 940px:leading-[25px]">
          <b className="font-normal font-HeronSans">
            EACH PARTICIPANT AND ZENIQ AGREES TO BRING CLAIMS AGAINST THE OTHER
            ONLY IN ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS
            MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE ACTION OR CLASS-WIDE
            ARBITRATION OR PRIVATE ATTORNEY-GENERAL ACTIONS OR ANY OTHER
            PROCEEDING WHERE SOMEONE ACTS IN A REPRESENTATIVE CAPACITY.
          </b>{" "}
          Unless expressively agreed by the Parties in writing with a notarized
          agreement, no arbitrator or judge may consolidate more than one{" "}
          {`person's`} claims or otherwise preside over any form of a
          representative or class proceeding.
        </p>
      </div>
    </div>
  );
}
