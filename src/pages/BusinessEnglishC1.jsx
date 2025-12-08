import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function BusinessEnglishC1() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="business-c1-page">
      {/* Hero Section */}
      <section className="business-c1-hero">
        <button className="back-btn" onClick={() => navigate('/')}>← Wróć</button>
        <div className="business-c1-hero-content">
          <span className="business-c1-badge">Executive Excellence</span>
          <h1>Business English C1</h1>
          <p className="business-c1-subtitle">
            Elite-level proficiency for senior executives and business leaders
          </p>
          <p className="business-c1-description">
            A comprehensive, sophisticated programme meticulously designed for C-suite executives, 
            senior management professionals, and ambitious leaders seeking to master the nuances 
            of high-stakes corporate communication and strategic business discourse.
          </p>
          <button className="cta-button-business-c1" onClick={() => navigate('/shop')}>
            Elevate Your Executive Presence - 1299 zł
          </button>
        </div>
      </section>

      {/* Strategic Advantages */}
      <section className="strategic-advantages-section">
        <div className="container">
          <h2>Strategic Advantages of C1 Proficiency</h2>
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">🎯</div>
              <h3>Executive Leadership</h3>
              <p>
                Command boardroom discussions with articulate precision. Influence strategic 
                decisions through sophisticated argumentation and persuasive rhetoric that 
                resonates with stakeholders at the highest echelons of business.
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">💎</div>
              <h3>Competitive Differentiation</h3>
              <p>
                Distinguish yourself in the global marketplace. C1 proficiency places you 
                in the elite 5% of non-native speakers, opening doors to prestigious 
                opportunities that demand exceptional linguistic acumen.
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">🌐</div>
              <h3>Global Strategic Influence</h3>
              <p>
                Navigate complex cross-border negotiations, orchestrate multinational 
                collaborations, and articulate sophisticated strategies in international 
                contexts with unwavering confidence and cultural intelligence.
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">📈</div>
              <h3>Premium Career Trajectory</h3>
              <p>
                Research demonstrates that executives with C1 proficiency command 
                compensation packages 50-70% higher than their counterparts, with 
                accelerated progression to senior leadership positions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Curriculum */}
      <section className="elite-curriculum-section">
        <div className="container">
          <h2>Elite Curriculum Architecture</h2>
          <p className="section-intro">
            A meticulously structured programme encompassing sophisticated business domains
          </p>
          <div className="curriculum-grid">
            <div className="curriculum-module">
              <div className="module-badge">MODULE 01</div>
              <h3>Strategic Communication Mastery</h3>
              <p className="module-emphasis">Advanced executive discourse</p>
              <ul>
                <li>Sophisticated stakeholder engagement methodologies</li>
                <li>High-impact executive correspondence and memoranda</li>
                <li>Nuanced persuasion techniques for C-suite audiences</li>
                <li>Complex argumentation frameworks and rhetorical strategies</li>
                <li>Advanced vocabulary: 1000+ executive-level collocations</li>
              </ul>
            </div>

            <div className="curriculum-module">
              <div className="module-badge">MODULE 02</div>
              <h3>Executive Presentations & Keynote Delivery</h3>
              <p className="module-emphasis">Commanding the boardroom and conference stage</p>
              <ul>
                <li>Delivering compelling keynote addresses to diverse audiences</li>
                <li>Articulating vision and strategy with gravitas and clarity</li>
                <li>Sophisticated visual storytelling and data narratives</li>
                <li>Managing challenging questions with diplomatic finesse</li>
                <li>Cultivating executive presence through linguistic mastery</li>
              </ul>
            </div>

            <div className="curriculum-module">
              <div className="module-badge">MODULE 03</div>
              <h3>Complex Negotiations & Deal Structuring</h3>
              <p className="module-emphasis">High-stakes negotiation excellence</p>
              <ul>
                <li>Sophisticated negotiation frameworks and tactics</li>
                <li>Multi-party negotiation dynamics and alliance building</li>
                <li>Managing impasse and facilitating breakthrough agreements</li>
                <li>Contractual language and legal terminology mastery</li>
                <li>Cross-cultural negotiation strategies and protocols</li>
              </ul>
            </div>

            <div className="curriculum-module">
              <div className="module-badge">MODULE 04</div>
              <h3>Strategic Leadership Communication</h3>
              <p className="module-emphasis">Inspiring and mobilizing organizational excellence</p>
              <ul>
                <li>Articulating transformational vision and strategic imperatives</li>
                <li>Change management communication and stakeholder alignment</li>
                <li>Crisis communication and reputation management</li>
                <li>Executive coaching conversations and developmental dialogues</li>
                <li>Building high-performance cultures through communication</li>
              </ul>
            </div>

            <div className="curriculum-module">
              <div className="module-badge">MODULE 05</div>
              <h3>Advanced Financial & Investment Discourse</h3>
              <p className="module-emphasis">Sophisticated financial communication</p>
              <ul>
                <li>Complex financial instruments and investment vehicles</li>
                <li>M&A terminology and due diligence communications</li>
                <li>Investor relations and earnings call presentations</li>
                <li>Risk assessment frameworks and mitigation strategies</li>
                <li>Capital markets dynamics and valuation methodologies</li>
              </ul>
            </div>

            <div className="curriculum-module">
              <div className="module-badge">MODULE 06</div>
              <h3>Strategic Marketing & Brand Positioning</h3>
              <p className="module-emphasis">Executive-level marketing communication</p>
              <ul>
                <li>Strategic brand architecture and positioning frameworks</li>
                <li>Market disruption strategies and innovation narratives</li>
                <li>Sophisticated customer segmentation and persona development</li>
                <li>Omnichannel strategy articulation and go-to-market planning</li>
                <li>Competitive intelligence and market entry strategies</li>
              </ul>
            </div>

            <div className="curriculum-module">
              <div className="module-badge">MODULE 07</div>
              <h3>Corporate Governance & Compliance</h3>
              <p className="module-emphasis">Board-level governance communication</p>
              <ul>
                <li>Board meeting protocols and fiduciary communications</li>
                <li>Regulatory compliance and ethical framework discussions</li>
                <li>Corporate governance best practices and standards</li>
                <li>ESG (Environmental, Social, Governance) reporting</li>
                <li>Stakeholder capitalism and sustainable business models</li>
              </ul>
            </div>

            <div className="curriculum-module">
              <div className="module-badge">MODULE 08</div>
              <h3>Global Business Strategy & Expansion</h3>
              <p className="module-emphasis">International growth and market entry</p>
              <ul>
                <li>Global expansion strategies and market assessment</li>
                <li>International joint ventures and strategic partnerships</li>
                <li>Cross-border M&A and integration planning</li>
                <li>Emerging markets opportunities and risk mitigation</li>
                <li>Geopolitical considerations in business strategy</li>
              </ul>
            </div>

            <div className="curriculum-module">
              <div className="module-badge">MODULE 09</div>
              <h3>Digital Transformation & Innovation Leadership</h3>
              <p className="module-emphasis">Leading in the digital economy</p>
              <ul>
                <li>Digital disruption strategies and business model innovation</li>
                <li>Technology trends: AI, blockchain, IoT strategic implications</li>
                <li>Digital ecosystem orchestration and platform strategies</li>
                <li>Cybersecurity governance and risk management</li>
                <li>Data-driven decision-making and analytics-enabled insights</li>
              </ul>
            </div>

            <div className="curriculum-module">
              <div className="module-badge">MODULE 10</div>
              <h3>Sophisticated Interpersonal Dynamics</h3>
              <p className="module-emphasis">Navigating complex organizational relationships</p>
              <ul>
                <li>Power dynamics and organizational politics navigation</li>
                <li>Diplomatic conflict resolution at senior levels</li>
                <li>Building and leveraging strategic alliances</li>
                <li>Executive networking and relationship capital cultivation</li>
                <li>Cross-functional collaboration and matrix management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Competencies */}
      <section className="competencies-section">
        <div className="container">
          <h2>Advanced Competencies Development</h2>
          <div className="competencies-grid">
            <div className="competency-item">
              <div className="competency-icon">📝</div>
              <h4>Executive Writing Excellence</h4>
              <p>Master sophisticated business documentation: strategic memoranda, board proposals, 
              executive summaries, thought leadership articles, and compelling business cases with 
              impeccable precision and persuasive power.</p>
            </div>
            <div className="competency-item">
              <div className="competency-icon">🎙️</div>
              <h4>Eloquent Public Speaking</h4>
              <p>Deliver captivating keynote addresses, moderate panel discussions, articulate 
              strategic vision to diverse stakeholders, and command attention in high-pressure 
              settings with gravitas and authenticity.</p>
            </div>
            <div className="competency-item">
              <div className="competency-icon">💼</div>
              <h4>Sophisticated Business Discourse</h4>
              <p>Engage in nuanced strategic discussions, navigate complex boardroom dynamics, 
              facilitate high-level decision-making processes, and articulate multifaceted 
              perspectives with diplomatic acumen.</p>
            </div>
            <div className="competency-item">
              <div className="competency-icon">📊</div>
              <h4>Complex Data Interpretation</h4>
              <p>Synthesize intricate datasets, communicate sophisticated analytical insights, 
              construct compelling data-driven narratives, and translate complex metrics into 
              actionable strategic recommendations.</p>
            </div>
            <div className="competency-item">
              <div className="competency-icon">🤝</div>
              <h4>Strategic Influence & Persuasion</h4>
              <p>Master sophisticated persuasion frameworks, navigate high-stakes negotiations, 
              build consensus among diverse stakeholders, and drive strategic initiatives through 
              compelling articulation and influence.</p>
            </div>
            <div className="competency-item">
              <div className="competency-icon">🌍</div>
              <h4>Cross-Cultural Leadership</h4>
              <p>Navigate diverse cultural contexts with sensitivity, adapt communication styles 
              for international audiences, build trust across cultural boundaries, and lead 
              multicultural teams with inclusive excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Package */}
      <section className="premium-package-section">
        <div className="container">
          <h2>Premium Executive Package</h2>
          <div className="premium-features">
            <div className="premium-feature-block">
              <div className="premium-icon">📚</div>
              <div className="premium-content">
                <h3>Exclusive Executive Materials</h3>
                <ul>
                  <li>250-page comprehensive C1 Business English compendium</li>
                  <li>2500+ sophisticated exercises from authentic executive scenarios</li>
                  <li>300+ premium templates: strategic memos, board presentations, proposals</li>
                  <li>Extensive glossary: 3000+ C1-level business collocations and idioms</li>
                  <li>75+ Harvard Business Review-style case studies</li>
                  <li>Access to exclusive executive webinar series</li>
                </ul>
              </div>
            </div>

            <div className="premium-feature-block">
              <div className="premium-icon">🎥</div>
              <div className="premium-content">
                <h3>Multimedia Executive Learning</h3>
                <ul>
                  <li>120+ premium audio recordings: executive meetings, investor calls, keynotes</li>
                  <li>50+ professionally produced video masterclasses</li>
                  <li>Exclusive interviews with Fortune 500 executives and thought leaders</li>
                  <li>TED Talk-style presentation analysis and deconstruction</li>
                  <li>12-month access to Executive English podcast library</li>
                  <li>Virtual reality boardroom simulations (beta access)</li>
                </ul>
              </div>
            </div>

            <div className="premium-feature-block">
              <div className="premium-icon">✍️</div>
              <div className="premium-content">
                <h3>Personalized Executive Coaching</h3>
                <ul>
                  <li>25 written assignments with detailed expert evaluation</li>
                  <li>Comprehensive linguistic and strategic communication feedback</li>
                  <li>Style, tone, and executive presence assessment</li>
                  <li>Individual development plan based on assessment results</li>
                  <li>Quarterly progress reviews with strategic recommendations</li>
                  <li>Direct access to senior communication consultants</li>
                </ul>
              </div>
            </div>

            <div className="premium-feature-block">
              <div className="premium-icon">🎯</div>
              <div className="premium-content">
                <h3>Advanced Simulations & Scenarios</h3>
                <ul>
                  <li>Sophisticated role-play: board meetings, investor pitches, M&A negotiations</li>
                  <li>Crisis management communication simulations</li>
                  <li>Executive panel participation and moderation practice</li>
                  <li>Strategic decision-making scenarios with peer feedback</li>
                  <li>International business etiquette and protocol training</li>
                  <li>Industry-specific immersion modules (Finance, Tech, Healthcare, etc.)</li>
                </ul>
              </div>
            </div>

            <div className="premium-feature-block">
              <div className="premium-icon">🌟</div>
              <div className="premium-content">
                <h3>Executive Career Acceleration</h3>
                <ul>
                  <li>Executive CV and LinkedIn profile optimization for global roles</li>
                  <li>Executive search and headhunter communication strategies</li>
                  <li>Salary negotiation frameworks for senior positions</li>
                  <li>Personal branding and thought leadership development</li>
                  <li>Curated opportunities: C-suite roles, board positions, speaking engagements</li>
                  <li>Exclusive networking events with programme alumni</li>
                </ul>
              </div>
            </div>

            <div className="premium-feature-block">
              <div className="premium-icon">🏆</div>
              <div className="premium-content">
                <h3>BEC Higher Preparation</h3>
                <ul>
                  <li>Comprehensive preparation for Cambridge C1 Business Higher exam</li>
                  <li>15 full-length BEC Higher practice tests with detailed analysis</li>
                  <li>Exam strategies and time management optimization</li>
                  <li>Speaking and writing components intensive coaching</li>
                  <li>Official Cambridge materials and past papers</li>
                  <li>Post-course examination voucher (optional add-on)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Timeline */}
      <section className="programme-timeline-section">
        <div className="container">
          <h2>9-Month Executive Development Journey</h2>
          <div className="executive-timeline">
            <div className="timeline-phase-c1">
              <div className="phase-badge">Phase I: Months 1-3</div>
              <h3>Foundation & Diagnostic Assessment</h3>
              <p className="phase-desc">Establishing C1 fundamentals and competency mapping</p>
              <ul>
                <li>Comprehensive diagnostic evaluation and personalized learning path design</li>
                <li>Advanced vocabulary acquisition: 1000+ executive collocations</li>
                <li>Sophisticated grammar structures and stylistic nuances</li>
                <li>Executive writing fundamentals and strategic communication frameworks</li>
                <li>Initial presentation delivery with expert critique and refinement</li>
              </ul>
            </div>

            <div className="timeline-phase-c1">
              <div className="phase-badge">Phase II: Months 4-6</div>
              <h3>Advanced Competency Development</h3>
              <p className="phase-desc">Mastering sophisticated business communication domains</p>
              <ul>
                <li>Complex negotiation simulations and strategic influence techniques</li>
                <li>Executive presentation mastery: 8 major presentations with coaching</li>
                <li>Industry-specific terminology immersion (selected verticals)</li>
                <li>Cross-cultural communication workshops and international protocols</li>
                <li>Board-level case study analysis and strategic recommendations</li>
                <li>Mid-programme assessment and individualized coaching session</li>
              </ul>
            </div>

            <div className="timeline-phase-c1">
              <div className="phase-badge">Phase III: Months 7-9</div>
              <h3>Executive Excellence & Certification Readiness</h3>
              <p className="phase-desc">Achieving mastery and examination preparation</p>
              <ul>
                <li>15 comprehensive BEC Higher mock examinations</li>
                <li>Advanced simulations: crisis management, investor relations, M&A scenarios</li>
                <li>Thought leadership development: article writing and keynote preparation</li>
                <li>Executive networking strategies and relationship capital cultivation</li>
                <li>Final capstone project: comprehensive strategic business proposal</li>
                <li>Graduation ceremony and alumni network induction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Executives */}
      <section className="target-executives-section">
        <div className="container">
          <h2>Designed for Discerning Professionals</h2>
          <div className="executives-grid">
            <div className="executive-profile">
              <div className="profile-icon">👔</div>
              <h3>C-Suite Executives</h3>
              <p>CEOs, CFOs, COOs, and other senior executives who require impeccable 
              communication skills for board interactions, investor relations, and strategic 
              stakeholder engagement at the highest organizational levels.</p>
            </div>
            <div className="executive-profile">
              <div className="profile-icon">🎯</div>
              <h3>Senior Management</h3>
              <p>Vice Presidents, Directors, and Senior Managers aspiring to C-suite roles 
              who recognize that sophisticated English proficiency is instrumental to career 
              progression and executive presence.</p>
            </div>
            <div className="executive-profile">
              <div className="profile-icon">💼</div>
              <h3>Management Consultants</h3>
              <p>Strategy consultants, management advisors, and professional services partners 
              who must articulate complex recommendations and influence senior client stakeholders 
              with precision and credibility.</p>
            </div>
            <div className="executive-profile">
              <div className="profile-icon">🌍</div>
              <h3>Global Business Leaders</h3>
              <p>Entrepreneurs, business owners, and founders of international ventures requiring 
              sophisticated communication capabilities to navigate cross-border partnerships, 
              fundraising, and market expansion.</p>
            </div>
            <div className="executive-profile">
              <div className="profile-icon">📈</div>
              <h3>Investment Professionals</h3>
              <p>Private equity partners, venture capitalists, investment bankers, and portfolio 
              managers who must communicate complex financial concepts and due diligence findings 
              with sophisticated precision.</p>
            </div>
            <div className="executive-profile">
              <div className="profile-icon">🎓</div>
              <h3>Academic & Research Leaders</h3>
              <p>University professors, research directors, and thought leaders seeking to 
              amplify their influence through executive education, consulting engagements, 
              and international academic collaborations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="investment-section">
        <div className="container">
          <h2>Strategic Investment in Executive Excellence</h2>
          <div className="investment-package">
            <div className="investment-card">
              <div className="investment-header">
                <h3>Business English C1</h3>
                <p className="investment-subtitle">Executive Mastery Programme</p>
              </div>
              <div className="investment-price">
                <span className="price-executive">1299 zł</span>
                <span className="price-duration">/ 9 months</span>
              </div>
              <div className="investment-breakdown">
                <p>Investment: <strong>144 zł per month</strong></p>
                <p className="roi-highlight">Exceptional ROI: C1 executives command 50-70% premium compensation</p>
              </div>
              <ul className="investment-inclusions">
                <li>✓ 9-month intensive programme (+ 3-month extended access)</li>
                <li>✓ 10 sophisticated business communication modules</li>
                <li>✓ 250-page C1 executive compendium</li>
                <li>✓ 2500+ advanced exercises and simulations</li>
                <li>✓ 120+ audio + 50+ video masterclasses</li>
                <li>✓ 25 personalized written evaluations</li>
                <li>✓ 300+ executive templates and frameworks</li>
                <li>✓ 75+ premium case studies</li>
                <li>✓ 15 BEC Higher mock examinations</li>
                <li>✓ Priority expert support and coaching</li>
                <li>✓ Executive career acceleration services</li>
                <li>✓ Alumni network and exclusive events access</li>
              </ul>
              <button className="cta-button-investment" onClick={() => navigate('/shop')}>
                Commence Your Executive Journey
              </button>
              <p className="investment-assurance">
                💎 <strong>Performance Guarantee:</strong> Achieve measurable C1 proficiency 
                or receive complimentary programme extension until objectives are realized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-executive-section">
        <div className="container">
          <h2>Frequently Addressed Inquiries</h2>
          <div className="faq-executive-list">
            <div className={`faq-executive-item ${openFaq === 0 ? 'open' : ''}`}>
              <div className="faq-executive-question" onClick={() => toggleFaq(0)}>
                <h3>What prerequisites are essential for programme enrollment?</h3>
                <span className="faq-executive-icon">{openFaq === 0 ? '−' : '+'}</span>
              </div>
              {openFaq === 0 && (
                <div className="faq-executive-answer">
                  <p>
                    Participants should possess solid B2+ proficiency as a foundational baseline. 
                    The programme is intentionally rigorous, designed to elevate competent B2+ 
                    communicators to sophisticated C1 mastery. We conduct a comprehensive diagnostic 
                    assessment during enrollment to ensure optimal programme fit and customize the 
                    learning trajectory to your specific developmental needs.
                  </p>
                </div>
              )}
            </div>

            <div className={`faq-executive-item ${openFaq === 1 ? 'open' : ''}`}>
              <div className="faq-executive-question" onClick={() => toggleFaq(1)}>
                <h3>What time commitment does the programme necessitate?</h3>
                <span className="faq-executive-icon">{openFaq === 1 ? '−' : '+'}</span>
              </div>
              {openFaq === 1 && (
                <div className="faq-executive-answer">
                  <p>
                    We recommend dedicating 5-7 hours weekly, totaling approximately 20-28 hours 
                    monthly. This intensive commitment yields 180-250 hours over the programme duration. 
                    The curriculum is designed with executive schedules in mind—flexible, self-paced, 
                    accessible 24/7 globally. Many participants engage during early mornings, evenings, 
                    or weekends according to their professional commitments.
                  </p>
                </div>
              )}
            </div>

            <div className={`faq-executive-item ${openFaq === 2 ? 'open' : ''}`}>
              <div className="faq-executive-question" onClick={() => toggleFaq(2)}>
                <h3>Does this programme prepare for internationally recognized certification?</h3>
                <span className="faq-executive-icon">{openFaq === 2 ? '−' : '+'}</span>
              </div>
              {openFaq === 2 && (
                <div className="faq-executive-answer">
                  <p>
                    Absolutely. The curriculum comprehensively prepares participants for Cambridge 
                    C1 Business Higher (BEC Higher), the gold standard for executive business English 
                    certification globally. We provide 15 full-length BEC Higher mock examinations, 
                    strategic test-taking methodologies, and intensive preparation for all examination 
                    components. Upon request, we facilitate examination registration and offer optional 
                    examination vouchers.
                  </p>
                </div>
              )}
            </div>

            <div className={`faq-executive-item ${openFaq === 3 ? 'open' : ''}`}>
              <div className="faq-executive-question" onClick={() => toggleFaq(3)}>
                <h3>Can content be tailored to industry-specific requirements?</h3>
                <span className="faq-executive-icon">{openFaq === 3 ? '−' : '+'}</span>
              </div>
              {openFaq === 3 && (
                <div className="faq-executive-answer">
                  <p>
                    Certainly. While the core curriculum encompasses universal executive communication 
                    competencies, we offer specialized immersion modules across diverse sectors: 
                    Financial Services, Technology & Innovation, Healthcare & Pharmaceuticals, 
                    Professional Services, Manufacturing, Energy, and more. Participants select 
                    industry-specific content during Phase II, receiving tailored terminology, 
                    case studies, and scenario-based learning aligned with their professional domain.
                  </p>
                </div>
              )}
            </div>

            <div className={`faq-executive-item ${openFaq === 4 ? 'open' : ''}`}>
              <div className="faq-executive-question" onClick={() => toggleFaq(4)}>
                <h3>What distinguishes this programme from alternative executive English offerings?</h3>
                <span className="faq-executive-icon">{openFaq === 4 ? '−' : '+'}</span>
              </div>
              {openFaq === 4 && (
                <div className="faq-executive-answer">
                  <p>
                    Our programme uniquely combines: (1) Authentic, sophisticated content from Fortune 
                    500 contexts, (2) Personalized coaching from seasoned communication consultants, 
                    (3) Comprehensive BEC Higher preparation, (4) Industry-specific customization options, 
                    (5) Executive career acceleration services, (6) Access to exclusive alumni network. 
                    Moreover, our pedagogical approach emphasizes practical application through 
                    sophisticated simulations rather than theoretical instruction.
                  </p>
                </div>
              )}
            </div>

            <div className={`faq-executive-item ${openFaq === 5 ? 'open' : ''}`}>
              <div className="faq-executive-question" onClick={() => toggleFaq(5)}>
                <h3>Is corporate sponsorship or organizational enrollment available?</h3>
                <span className="faq-executive-icon">{openFaq === 5 ? '−' : '+'}</span>
              </div>
              {openFaq === 5 && (
                <div className="faq-executive-answer">
                  <p>
                    Absolutely. We collaborate extensively with organizations investing in executive 
                    development. Corporate packages include: VAT invoices, comprehensive progress 
                    reporting, batch enrollment discounts (cohorts of 5+), customized curriculum 
                    alignment with organizational objectives, dedicated account management, and 
                    organizational impact assessment. Contact us for bespoke corporate solutions 
                    and volume pricing structures.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-c1">
        <div className="container">
          <h2>Elevate Your Executive Communication Excellence</h2>
          <p className="cta-executive-description">
            Join an elite cohort of distinguished professionals who have elevated their careers 
            through C1 mastery. Transform your executive presence, amplify your strategic influence, 
            and unlock unprecedented opportunities in the global marketplace.
          </p>
          <button className="cta-button-executive-final" onClick={() => navigate('/shop')}>
            Commence Executive Programme - 1299 zł
          </button>
          <p className="cta-executive-subtext">
            ✓ 9-month intensive curriculum + 3-month extension • ✓ BEC Higher preparation • ✓ Performance guarantee
          </p>
        </div>
      </section>
    </div>
  );
}

export default BusinessEnglishC1;
