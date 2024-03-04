import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { HiOutlineCog6Tooth, HiMiniCog6Tooth, HiOutlineUsers, HiMiniUsers, HiOutlineAcademicCap, HiAcademicCap } from 'react-icons/hi2';

const AdminLayout = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);
  const [selectedSection, setSelectedSection] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <Disclosure as="nav" style={{ backgroundColor: '#4480FF' }}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-11 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button
                    className={`relative inline-flex items-center justify-center rounded-md p-1 ${
                      open ? 'text-gray-400' : 'text-white'
                    } hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
                    onClick={toggleSidebar}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Toggle sidebar</span>
                    <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>

      <main className="flex">
        <aside>
          <Sidebar
            aria-label="Default sidebar example"
            style={{ height: '89vh', width: isSidebarExpanded ? '16rem' : '4rem' }}
          >
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <li>
                  <Link
                    to={'dashboard'}
                    onClick={() => handleSectionChange('dashboard')}
                    className={`flex items-center justify-center rounded-lg p-2 text-base font-normal ${
                      selectedSection === 'dashboard'
                        ? 'text-zinc-950 bg-white font-bold'
                        : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                    }`}
                  >
                    {isSidebarExpanded ? (
                      <>
                        {selectedSection === 'dashboard' ? (
                          <HiMiniCog6Tooth style={{ color: '#6B82B8' }} className="h-6 w-6 flex-shrink-0 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                        ) : (
                          <HiOutlineCog6Tooth style={{ color: '#6B82B8' }} className="h-6 w-6 flex-shrink-0 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                        )}
                        <span className="px-3 flex-1 whitespace-nowrap">Ajustes</span>
                      </>
                    ) : (
                      <HiMiniCog6Tooth style={{ color: '#6B82B8' }} className="h-6 w-6 flex-shrink-0 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    to={'users'}
                    onClick={() => handleSectionChange('users')}
                    className={`flex items-center justify-center rounded-lg p-2 text-base font-normal ${
                      selectedSection === 'users'
                        ? 'text-zinc-950 bg-white font-bold'
                        : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                    }`}
                  >
                    {isSidebarExpanded ? (
                      <>
                        {selectedSection === 'users' ? (
                          <HiMiniUsers style={{ color: '#6B82B8' }} className="h-6 w-6 flex-shrink-0 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                        ) : (
                          <HiOutlineUsers style={{ color: '#6B82B8' }} className="h-6 w-6 flex-shrink-0 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                        )}
                        <span className="px-3 flex-1 whitespace-nowrap">Docentes</span>
                      </>
                    ) : (
                      <HiMiniUsers style={{ color: '#6B82B8' }} className="h-6 w-6 flex-shrink-0 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    to={'products'}
                    onClick={() => handleSectionChange('products')}
                    className={`flex items-center justify-center rounded-lg p-2 text-base font-normal ${
                      selectedSection === 'products'
                        ? 'text-zinc-950 bg-white font-bold'
                        : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                    }`}
                  >
                    {isSidebarExpanded ? (
                      <>
                        {selectedSection === 'products' ? (
                          <HiAcademicCap style={{ color: '#6B82B8' }} className="h-6 w-6 flex-shrink-0 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                        ) : (
                          <HiOutlineAcademicCap style={{ color: '#6B82B8' }} className="h-6 w-6 flex-shrink-0 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                        )}
                        <span className="px-3 flex-1 whitespace-nowrap">Estudiantes</span>
                      </>
                    ) : (
                      <HiAcademicCap style={{ color: '#6B82B8' }} className="h-6 w-6 flex-shrink-0 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    )}
                  </Link>
                </li>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </aside>
        <section className="w-full">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default AdminLayout;
