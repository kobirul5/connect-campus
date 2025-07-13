'use client'
import { FaExternalLinkAlt, FaFilter, FaSearch, FaBookOpen } from 'react-icons/fa';
import { useState } from 'react';

const ResearchPapersSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedField, setSelectedField] = useState('All');

    const researchFields = [
        'All',
        'Computer Science',
        'Medicine',
        'Engineering',
        'Business',
        'Environmental Science',
        'Social Sciences'
    ];

    const researchPapers = [
        {
            id: 1,
            title: 'Advancements in Quantum Computing Algorithms',
            authors: 'Dr. Sarah Chen, Michael Rodriguez (Tech University)',
            abstract: 'This paper explores new quantum algorithms that significantly reduce computation time for complex problems...',
            field: 'Computer Science',
            publishedDate: '2023-03-15',
            link: 'https://drive.google.com/file/d/1gOG0NVlxMYWyjAfxGdc4TLzSXIvfVSel/view?usp=sharing',
            college: 'Tech University'
        },
        {
            id: 2,
            title: 'Sustainable Urban Development Models',
            authors: 'Prof. James Wilson, Emily Park (Green Valley College)',
            abstract: 'A comprehensive study of urban sustainability frameworks with case studies from 15 major cities...',
            field: 'Environmental Science',
            publishedDate: '2023-01-22',
            link: 'https://drive.google.com/file/d/1gOG0NVlxMYWyjAfxGdc4TLzSXIvfVSel/view?usp=sharing',
            college: 'Green Valley College'
        },
        {
            id: 3,
            title: 'Neural Networks for Early Disease Detection',
            authors: 'Dr. Amanda Lee, David Kim (Metropolitan Institute)',
            abstract: 'Novel application of deep learning models to identify early-stage biomarkers for chronic diseases...',
            field: 'Medicine',
            publishedDate: '2023-05-10',
            link: 'https://drive.google.com/file/d/1gOG0NVlxMYWyjAfxGdc4TLzSXIvfVSel/view?usp=sharing',
            college: 'Metropolitan Institute'
        },
        {
            id: 4,
            title: 'Blockchain Applications in Supply Chain',
            authors: 'Prof. Robert Taylor, Jessica Wong (Tech University)',
            abstract: 'Examining the efficiency gains and challenges of blockchain implementation in global supply chains...',
            field: 'Business',
            publishedDate: '2023-04-05',
            link: 'https://drive.google.com/file/d/1gOG0NVlxMYWyjAfxGdc4TLzSXIvfVSel/view?usp=sharing',
            college: 'Tech University'
        },
        {
            id: 5,
            title: 'Biodegradable Materials for Construction',
            authors: 'Dr. Maria Garcia, Thomas Brown (Green Valley College)',
            abstract: 'Development and testing of new eco-friendly construction materials with comparable durability...',
            field: 'Engineering',
            publishedDate: '2023-02-18',
            link: 'https://drive.google.com/file/d/1gOG0NVlxMYWyjAfxGdc4TLzSXIvfVSel/view?usp=sharing',
            college: 'Green Valley College'
        },
        {
            id: 6,
            title: 'Behavioral Economics in Digital Markets',
            authors: 'Prof. Alan Smith, Rachel Zhao (Metropolitan Institute)',
            abstract: 'How cognitive biases influence consumer behavior in e-commerce platforms and digital services...',
            field: 'Social Sciences',
            publishedDate: '2023-06-30',
            link: 'https://drive.google.com/file/d/1gOG0NVlxMYWyjAfxGdc4TLzSXIvfVSel/view?usp=sharing',
            college: 'Metropolitan Institute'
        }
    ];

    const filteredPapers = researchPapers.filter(paper => {
        const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            paper.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
            paper.abstract.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesField = selectedField === 'All' || paper.field === selectedField;
        return matchesSearch && matchesField;
    });

    return (
        <section className="pb-12 px-4 bg-base-100">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald to-secondary">
                            Featured Research Papers
                        </span>
                    </h2>
                </div>

                {/* Search and Filter */}
                <div className="flex flex-col hidden md:flex-row gap-4 mb-8 md:hidden lg:hidden">
                    <div className="relative flex-grow">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaSearch className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search papers by title, author, or keywords..."
                            className="input input-bordered w-full pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-outline">
                            <FaFilter className="mr-2" />
                            {selectedField}
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            {researchFields.map(field => (
                                <li key={field}>
                                    <button
                                        className={field === selectedField ? 'active' : ''}
                                        onClick={() => setSelectedField(field)}
                                    >
                                        {field}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Papers Grid */}
                {filteredPapers.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPapers.map(paper => (
                            <div key={paper.id} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
                                <div className="card-body">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <span className="badge badge-emerald mb-2">{paper.field}</span>
                                            <h3 className="card-title">{paper.title}</h3>
                                        </div>
                                        <FaBookOpen className="text-emerald/20 text-2xl" />
                                    </div>

                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <span>{paper.college}</span>
                                        <span className="mx-2">•</span>
                                        <span>{new Date(paper.publishedDate).toLocaleDateString()}</span>
                                    </div>

                                    <p className="text-sm line-clamp-3 mb-4">{paper.abstract}</p>

                                    <div className="flex justify-between items-center mt-auto">
                                        <div className="text-sm font-medium">{paper.authors.split(',')[0]}</div>
                                        <a
                                            href={paper.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm btn-outline"
                                        >
                                            Read Paper <FaExternalLinkAlt className="ml-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-5xl mb-4 text-gray-300">
                            <FaSearch />
                        </div>
                        <h3 className="text-xl font-medium">No papers found</h3>
                        <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ResearchPapersSection;