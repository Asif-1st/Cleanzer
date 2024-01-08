export const styles = {
    flexStart: 'flex justify-start items-center',
    flexCenter: 'flex justify-center items-center',

    sectionTitle:'text-[32px] font-plus font-bold leading-normal tracking-[-2px]',
    paddingY:'py-8 lg:py-10',
    headTitle: ' font-plus text-center text-[28px] md:text-[36px] lg:text-[46px] font-bold',
    sectionTitlePara:''

};

export const layout = {
    section:`${styles.flexCenter} flex-col w-full ${styles.paddingY} relative overflow-hidden `,
    paragraph:`text-[#646464] font-plus text-sm font-normal leading-5`,
    cardTitle:`text-xl font-semibold text-[#323232] font-plus`,
    container: 'w-11/12 lg:w-4/5 mx-auto'
};