import React from 'react';
import icons from '../../ultils/icons';
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';

const { BsThreeDotsVertical } = icons

const TourDetail = () => {
    const navigate = useNavigate();
    const navigateBooking = () => {
        // 👇️ navigate to /
        navigate('/tour-booking');
      };
    return (
        <div>
            <section className="flex justify-center relative w-full bg-sea animate-fade bg-center bg-no-repeat bg-cover rounded-b-[20px]">
                <div className="w-full py-28 px-6 md:py-32 md:max-w-3xl lg:px-2 xl:max-w-7xl xl:py-48 2xl:px-0">
                    <div className="mx-auto flex items-center justify-center pb-[86px] max-w-[242px] md:pb-[37px] md:max-w-[404px] xl:pb-[100px] xl:max-w-[584px]">
                        <div className="font-vampiroOne text-[24px] leading-10 tracking-[0.72px] uppercase text-center md:text-[32px] md:leading-[60px] md:tracking-[0.96px] xl:text-[50px] xl:leading-[99px] xl:tracking-[1.5px]">
                            discover the <br/> journey</div>
                    </div>
                </div>
            </section>
            <section className="mx-auto w-full pt-10 pb-[120px] md:pb-[120px] xl:pb-[80px] xl:max-w-7xl">
                <div className="px-6 lg:px-2 2xl:px-0">
                    <div className="truncate w-full flex items-center py-[10px] gap-x-2">
                        <div className="text-neutral-1-600 text-body-1 leading-[34px] xl:text-[20px]">Du lịch</div>
                        <div className="flex items-center justify-center w-6 h-6">
                            <i className="twi-22-chevron-line text-[16px] text-secondary-1 text-center"></i>
                        </div>
                        <div className="text-neutral-1-600 text-body-1 leading-[34px] xl:text-[20px]">Du lịch trong nước</div>
                        <div className="flex items-center justify-center w-6 h-6">
                            <i className="twi-22-chevron-line text-[16px] text-secondary-1 text-center"></i>
                        </div>
                        <div className="truncate text-body-1 leading-[34px] text-neutral-1-900 xl:text-[20px]">Đà Nẵng - Bà Nà - Cầu Vàng - Sơn Trà - Biển Mỹ Khê - Hội An - Đà Nẵng</div>
                    </div>
                    <div className="pt-[34px] pb-6 text-heading-4 text-neutral-1-900 font-semibold md:pt-8 xl:pb-7 xl:pt-[29px] xl:text-heading-3">Đà Nẵng - Bà Nà - Cầu Vàng - Sơn Trà - Biển Mỹ Khê - Hội An - Đà Nẵng</div>
                    <div className="h-[57px] w-fit px-4 shadow-btn rounded-[6px] flex items-center justify-center gap-x-2">
                        <i className="twi-22-heart-fill text-[20px] leading-[18px] text-[#EA2733]"></i>
                        <div className="text-body-1 text-neutral-1-900">358 quan tâm</div>
                    </div>
                    <div className="pt-6 md:pt-8 xl:pt-7 xl:grid xl:grid-cols-845 xl:gap-x-6">
                         {/* image  */}
                        <img className="rounded-md aspect-[366/420] object-cover md:aspect-[720/446] xl:aspect-[845/480] xl:rounded-lg" src="../img/home/sec2-img2.png" alt=''/>
                        <div className="grid grid-cols-1 gap-y-6 h-fit xl:row-span-2">
                             {/* Tour info  */}
                            <div className="hidden xl:block px-6 w-full border-[1.5px] border-neutral-2-200">
                                <div className="py-4 text-header-2 text-primary-2 font-semibold shadow-line">Đà Nẵng - Bà Nà - Cầu Vàng - Sơn Trà - Biển Mỹ Khê - Hội An - Đà Nẵng (Khách sạn 4* trọn tour)</div>
                                <div className="py-4 text-body-2 text-neutral-1-900 shadow-line">Mã Tour: HCMPQ4N4D_0512</div>
                                <div className="py-4 text-body-2 text-neutral-1-900 shadow-line">Thời gian: 3 ngày 2 đêm</div>
                                <div className="py-4 text-body-2 text-neutral-1-900 shadow-line">Khởi hành: 20/08/2022 - 04/09/2022</div>
                                <div className="py-4 text-body-2 text-neutral-1-900 shadow-line">Vận chuyển: Máy bay</div>
                                <div className="py-4 text-body-2 text-neutral-1-900">Xuất phát: Từ TP. Hồ Chí Minh</div>
                            </div>
                             {/* Giá  */}
                            <div className="border-[1.5px] border-neutral-2-200 pt-8 md:pt-6 xl:pt-0">
                                <div className="w-full text-center py-4 bg-neutral-2-100 text-primary-2 text-heading-4 font-semibold md:text-heading-3">
                                    8,500,000đ</div>
                                <Button textColor='text-white' bgColor='bg-primary-2' text='ĐẶT TOUR' wfull={true} onClick={navigateBooking}/>
                            </div>
                            {/* Tour menu list  */}
                            <div className="w-full bg-neutral-2-100 px-6 hidden xl:block">
                                <a href="#diemnhan" className="flex items-center gap-x-6 py-4 shadow-white-line text-neutral-1-900 hover:text-primary-2">
                                    <i className="twi-22-alert-circle-line text-[24px] leading-6"></i>
                                    <div className="text-title-1 font-semibold leading-[39px]">Điểm nhấn hành trình</div>
                                </a>
                                <a href="#lichtrinh" className="flex items-center gap-x-6 py-4 shadow-white-line text-neutral-1-900 hover:text-primary-2">
                                    <i className="twi-22-map-fill text-[24px] leading-6"></i>
                                    <div className="text-title-1 font-semibold leading-[39px]">Lịch trình</div>
                                </a>
                                <a href="#dichvu" className="flex items-center gap-x-6 py-4 shadow-white-line text-neutral-1-900 hover:text-primary-2">
                                    <i className="twi-22-paperclip-line text-[24px] leading-6"></i>
                                    <div className="text-title-1 font-semibold leading-[39px]">Dịch vụ bao gồm và không bao gồm</div>
                                </a>
                                <a href="#ghichu" className="flex items-center gap-x-6 py-4 shadow-white-line text-neutral-1-900 hover:text-primary-2">
                                    <i className="twi-22-book-open-fill text-[24px] leading-6"></i>
                                    <div className="text-title-1 font-semibold leading-[39px]">Ghi chú</div>
                                </a>
                                <a href="#ngaykhoihanh" className="flex items-center gap-x-6 py-4 shadow-white-line text-neutral-1-900 group hover:text-primary-2">
                                    <img src="../img/home/calendar-900.svg" className="w-6 h-6 group-hover:hidden" alt=""/>
                                    <img src="../img/home/calendar-blue.svg" className="w-6 h-6 hidden group-hover:block" alt=""/>
                                    <div className="text-title-1 font-semibold leading-[39px]">Ngày khởi hành khác</div>
                                </a>
                            </div>
                        </div>
                        {/* Tour detail  */}
                        <div className="pt-8">
                            {/* Điểm nhấn hành trình  */}
                            <div id="diemnhan">
                                <div className="flex items-center gap-x-4 pb-2 shadow-line mb-6 md:gap-x-6 md:pb-4">
                                    <i className="twi-22-alert-circle-line text-[28px] text-primary-2 leading-7"></i>
                                    <div className="text-title-1 text-neutral-1-900 font-semibold leading-[39px] md:text-[20px]">Điểm nhấn hành trình</div>
                                </div>
                                <div className="pb-8">
                                    <div className="grid grid-cols-101 gap-y-4 text-caption-1 text-neutral-1-900 font-semibold md:text-body-2 xl:gap-x-2">
                                        <div>Hành trình</div>
                                        <div>Đà Nẵng - Bà Nà - Cầu Vàng - Sơn Trà - Biển Mỹ Khê - Hội An - Đà Nẵng (Khách sạn 4* trọn tour)</div>
                                        <div>Lịch trình</div>
                                        <div>3 ngày 2 đêm</div>
                                        <div>Khởi hành</div>
                                        <div>18/08 - 20/08/2022 ; 02/09 - 04/09/2022</div>
                                        <div>Vận chuyển</div>
                                        <div>Xe du lịch đời mới, máy bay</div>
                                    </div>
                                    <p className="pt-6 text-caption-1 leading-5 md:text-[14px] xl:hidden">
                                        <span className="md:font-semibold">Du lịch mùa Hè - Đà Nẵng - Bà Nà - Cầu Vàng - Sơn Trà - Biển Mỹ Khê - Hội An - Đà Nẵng từ Sài Gòn giá tốt 2022 . </span>
                                        Được mệnh danh là ‘’thành phố đáng đến’’ với dòng sông Hàn thơ mộng với cây cầu Rồng biểu tượng của Thành phố biển du lịch Đà Nẵng 
                                        - nơi mà quý khách có thể cảm nhận được sự pha trộn giữa khí hậu miền Bắc, miền Nam.
                                        Ngoài ra Đà Nẵng còn sở hữu nhiều danh lam thắng cảnh làm say lòng người như: Bà Nà Hills, Bán Đảo Sơn Trà, Ngũ Hành Sơn, Đà Nẵng, phố cổ Hội An…. 
                                        Tour du lịch Đà Nẵng sẽ đưa quý khách khám phá bãi biển được Forbes lựa chọn là bãi biển quyến rũ nhất hành tinh với bờ biển dài,làn nước trong xanh, không khí mát mẻ 
                                    </p>
                                    <p className="leading-5 text-[14px] hidden xl:block pt-8">
                                        <span className="font-semibold">Du lịch mùa Hè - Đà Nẵng - Bà Nà - Cầu Vàng - Sơn Trà - Biển Mỹ Khê - Hội An - Đà Nẵng từ Sài Gòn giá tốt 2022 . </span>
                                        Được mệnh danh là ‘’thành phố đáng đến’’ với dòng sông Hàn thơ mộng với cây cầu Rồng biểu tượng của Thành phố biển du lịch Đà Nẵng 
                                        - nơi mà quý khách có thể cảm nhận được sự pha trộn giữa khí hậu miền Bắc, miền Nam.
                                        Ngoài ra Đà Nẵng còn sở hữu nhiều danh lam thắng cảnh làm say lòng người như: Bà Nà Hills, Bán Đảo Sơn Trà, Ngũ Hành Sơn, Đà Nẵng, phố cổ Hội An…. 
                                        Tour du lịch Đà Nẵng sẽ đưa quý khách khám phá bãi biển được Forbes lựa chọn là bãi biển quyến rũ nhất hành tinh với bờ biển dài,làn nước trong xanh, không khí mát mẻ 
                                        …Tham khảo kinh nghiệm du lịch Đà Nẵng và Đặt ngay tour Đà Nẵng của Du Lịch Việt để khám phá Đà Nẵng có gì mà lại luôn là điểm đến hấp dẫn như vậy.
                                    </p>
                                </div>
                            </div>
                             {/* Lịch trình  */}
                            <div id="lichtrinh">
                                <div className="flex items-center gap-x-6 pb-2 shadow-line mb-6 md:pb-4">
                                    <i className="twi-22-map-fill text-[24px] text-primary-2 leading-6"></i>
                                    <div className="text-title-1 text-neutral-1-900 font-semibold leading-[39px] md:text-[20px]">Lịch trình</div>
                                </div>
                                <div className="pb-8">
                                    <div className="text-caption-1 text-neutral-1-900 md:text-body-2">
                                        <div className="font-semibold">Ngày 1: TP. Hồ Chí Minh - Đà Nẵng - Khu du lịch Bà Nà ( Ăn chiều )</div>
                                        <div className="pt-2 flex md:pt-6">
                                            <div className="flex flex-col">
                                                <div className="w-[14px] h-4 rounded-[50%] bg-primary-2"></div>
                                                <div className="border-r-[1.5px] border-dashed border-primary-2 h-line w-1/2"></div>
                                                <div className="w-[14px] h-4 rounded-[50%] bg-primary-2"></div>
                                            </div>
                                            <p className="pl-[31px] md:hidden">Hướng dẫn viên Vietravel hỗ trợ làm thủ tục cho đoàn đáp chuyến bay đi Đà Nẵng. Tại sân bay Đà Nẵng xe và HDV Vietravel đón đoàn:<br/>
                                                <span className="pr-3">-</span>Bán đảo Sơn Trà và viếng Chùa Linh Ứng: Nơi đây có tượng Phật Quan Thế Âm cao nhất Việt Nam...<br/>
                                                <span className="pr-3">-</span>Ngũ Hành Sơn: Động Tàng Chơn, Động Hoa Nghiêm, Chùa Non Nước,...
                                            </p>
                                            <p className="pl-[31px] hidden md:block">Quý khách tập trung tại điểm hẹn, Ga đi trong nước, sân bay Tân Sơn Nhất. Hướng dẫn viên Vietravel hỗ trợ làm thủ tục cho đoàn đáp chuyến bay đi Đà Nẵng. Tại sân bay Đà Nẵng xe và HDV Vietravel đón đoàn:<br/>
                                                <span className="pr-3">-</span>Bán đảo Sơn Trà và viếng Chùa Linh Ứng: Nơi đây có tượng Phật Quan Thế Âm cao nhất Việt Nam...<br/>
                                                <span className="pr-3">-</span>Ngũ Hành Sơn: Động Tàng Chơn, Động Hoa Nghiêm, Chùa Non Nước,...<br/>
                                                <span className="pr-3">-</span>Làng Đá Non Nước Nguyễn Hùng: mua sắm sản phẩm đá mỹ nghệ...
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-6 text-caption-1 text-neutral-1-900 md:text-body-2 md:pt-8">
                                        <div className="font-semibold">Ngày 1: Đà Nẵng - Bán đảo Sơn Trà ( Ăn sáng, chiều, tối )</div>
                                        <div className="pt-2 flex md:pt-6">
                                            <div className="flex flex-col">
                                                <div className="w-[14px] h-4 rounded-[50%] bg-primary-2"></div>
                                                <div className="border-r-[1.5px] border-dashed border-primary-2 h-line w-1/2"></div>
                                                <div className="w-[14px] h-4 rounded-[50%] bg-primary-2"></div>
                                            </div>
                                            <div className="pl-[31px]">
                                                <p>Dùng bữa sáng tại khách sạn. Xe đưa tham quan:<br/>
                                                <span className="pr-3">-</span>Khu du lịch Bà Nà (chi phí cáp treo & Ăn trưa tự túc): tận hưởng không khí se lạnh tại miền Trung...<br/>
                                                <span className="pr-3">-</span>Bãi biển Mỹ Khê: Một trong những bãi biển quyến rũ nhất hành tinh. Quý khách tự do dạo biển....
                                                </p>
                                                <p className="hidden md:block"><span className="pr-3">-</span> Buổi tối Quý khách tự túc đi dạo phố, thưởng thức đặc sản địa phương...Nghỉ đêm tại Đà Nẵng.</p>                        
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-6 text-caption-1 text-neutral-1-900 md:text-body-2 md:pt-8">
                                        <div className="font-semibold">Ngày 3: Đà Nẵng - TP. Hồ Chí Minh ( Ăn sáng )</div>
                                        <div className="pt-2 flex md:pt-6">
                                            <div className="flex flex-col">
                                                <div className="w-[14px] h-4 rounded-[50%] bg-primary-2"></div>
                                                <div className="border-r-[1.5px] border-dashed border-primary-2 h-line w-1/2"></div>
                                                <div className="w-[14px] h-4 rounded-[50%] bg-primary-2"></div>
                                            </div>
                                            <div className="pl-[31px]">
                                                <p>Dùng bữa sáng tại khách sạn. Xe tiễn Quý khách ra sân bay Đà Nẵng đón chuyến bay trở về Tp.Hồ Chí Minh. 
                                                Chia tay Quý khách và kết thúc chương trình du lịch tại sân bay Tân Sơn Nhất</p>
                                                <p className="hidden md:block"><span className="font-semibold">Lưu ý:</span><br/> 
                                                    <span className="pr-3">-</span>Hành trình có thể thay đổi thứ tự điểm đến tùy vào điều kiện thực tế.<br/> 
                                                    <span className="pr-3">-</span>Khách Sạn có thể ở xa trung tâm thành phố vào các mùa Cao Điểm.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Ghi chú  */}
                            <div id="ghichu" className="flex items-center gap-x-4 pb-2 shadow-line mb-6 md:mb-8 md:gap-x-6 md:pb-4">
                                <i className="twi-22-book-open-fill text-[28px] text-primary-2 leading-7"></i>
                                <div className="text-title-1 text-neutral-1-900 leading-[39px] font-semibold md:text-[20px]">Ghi chú</div>
                            </div>
                            <div className='pb-8 pl-12'>
                                <div className='text-caption-1 text-neutral-1-900 md:text-body-2'>- Ghi chú 1</div>
                                <div className='text-caption-1 text-neutral-1-900 md:text-body-2'>- Ghi chú 2</div>
                            </div>
                             {/* Dịch vụ  */}
                            <div id="dichvu" className="flex items-center gap-x-4 pb-2 shadow-line mb-6 md:mb-8 md:gap-x-6 md:pb-4">
                                <i className="twi-22-paperclip-line text-[28px] text-primary-2 leading-7"></i>
                                <div className="text-title-1 text-neutral-1-900 leading-[39px] md:text-[20px] font-semibold">Dịch vụ kèm theo</div>
                            </div>
                            <div className='pb-8 pl-12'>
                                <div className='text-caption-1 text-neutral-1-900 md:text-body-2'>- Khách sạn tiêu chuẩn 4*</div>
                                <div className='text-caption-1 text-neutral-1-900 md:text-body-2'>- Vé tham quan</div>
                            </div>
                             {/* Ngày khởi hành khác  */}
                            <div id="ngaykhoihanh">
                                <div className="flex items-center gap-x-4 pb-2 shadow-line md:gap-x-6 md:pb-4">
                                    <img src="../img/home/calendar-blue.svg" className="w-7 h-7" alt=""/>
                                    <div className="text-title-1 text-neutral-1-900 leading-[39px] font-semibold md:text-[20px]">Ngày khởi hành khác</div>
                                </div>
                                <table className="tourtable table-auto text-body-2">
                                    <tr className="font-semibold">
                                        <td className="min-w-[41px] xl:min-w-[66px]">STT</td>
                                        <td className="xl:min-w-[130px]">Ngày khởi hành</td>
                                        <td className="min-w-[94px] xl:min-w-[141px]">Giá từ</td>
                                        <td className="min-w-[100px] xl:min-w-[128px]">Số chỗ</td>
                                        <td>Book tour</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>20/08/2022</td>
                                        <td>8,500,000đ</td>
                                        <td>Còn 10 chỗ</td>
                                        <td className='md:hidden'><BsThreeDotsVertical/></td>
                                        <td className="gap-x-[11px] pt-4 hidden md:flex">
                                            <button className="bg-primary-2 w-16 h-7 flex items-center justify-center rounded-md shadow-shad1 hover:bg-primary-1">
                                                <div className="text-white text-body-2">Book</div></button>
                                            <button className="bg-white w-16 h-7 flex items-center justify-center rounded-md shadow-btn hover:bg-neutral-3-50">
                                                <div className="text-neutral-1-900 text-body-2">Chi tiết</div></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>21/08/2022</td>
                                        <td>8,500,000đ</td>
                                        <td>Còn 10 chỗ</td>
                                        <td className='md:hidden'><BsThreeDotsVertical/></td>
                                        <td className="gap-x-[11px] pt-4 hidden md:flex">
                                            <button className="bg-primary-2 w-16 h-7 flex items-center justify-center rounded-md shadow-shad1 hover:bg-primary-1">
                                                <div className="text-white text-body-2">Book</div></button>
                                            <button className="bg-white w-16 h-7 flex items-center justify-center rounded-md shadow-btn hover:bg-neutral-3-50">
                                                <div className="text-neutral-1-900 text-body-2">Chi tiết</div></button>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mx-auto w-full pb-[92px] md:pb-[120px] md:max-w-3xl xl:pb-[156px] xl:max-w-7xl">
                <div className="px-6 lg:px-2 2xl:px-0">
                    <div className="pb-8 text-neutral-1-900 text-heading-4 font-semibold leading-[31px] xl:text-[32px] xl:pb-[60px]">Tour liên quan</div>
                    <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-6 xl:grid-cols-3">
                        <a href="chitiettour.html" className="relative pb-[21px] rounded-[20px] shadow-shad1 overflow-hidden animate-fade-down group md:animate-fade-right md:pb-[23px] xl:animate-fade-down xl:pb-[31px]">
                            <div className="relative w-full pt-[48.09%] md:pt-[44.83%] transition-all xl:overflow-hidden xl:pt-[45.63%]">
                                <img className="absolute w-full h-full top-0 left-0 object-cover xl:hidden" src="../img/home/sec2-img1.png" alt=''/>
                                <img className="hidden absolute w-full h-full top-0 left-0 object-cover transition-all xl:block xl:group-hover:scale-125" src="../img/home/sec2-img3.png" alt=''/>
                            </div>
                            <div className="absolute w-full px-6 top-4 flex items-center justify-between">
                                <div className="text-white text-title-2 font-semibold xl:text-title-1">Thành phố Hạ Long</div>
                                <div className="flex gap-x-2">
                                    <div className="flex items-center justify-center bg-white/40 w-7 h-7 rounded-full">
                                        <i className="twi-22-heart-line text-[18px] leading-[13px] text-white"></i>
                                    </div>
                                    <div className="flex items-center justify-center bg-white/40 w-7 h-7 rounded-full">
                                        <img src="../img/home/external-link.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 px-6 md:pt-[14px] xl:pt-[22px]">
                                <div className="max-w-[74%]">
                                    <div className="flex items-center">
                                        <div className="w-[99px] line-through text-neutral-1-500 text-body-1 leading-[17px]">11,500,000đ</div>
                                        <div className="pl-2 text-header-2 text-secondary-1 font-semibold leading-[17px]">10,500,000đ</div>
                                    </div>
                                    <div className="py-4 text-caption-1 leading-[17px] font-semibold text-neutral-1-900 md:py-[18px] xl:text-[14px]">Mã tour: SGN185-005-180822VN-V</div>
                                    <div className="text-caption-1 text-neutral-1-600 leading-[17px]">Thời gian : 3 ngày 2 đêm</div>
                                </div>
                                <div className="w-[55px] h-[55px] py-[17px] px-[11px] rounded-full bg-white border-[3px] border-neutral-1-50 xl:w-[60px] xl:h-[60px]">
                                    <img src="../img/header-footer/logo-blue.png" alt=""/>
                                </div>
                            </div>
                        </a>
                        <a href="chitiettour.html" className="relative pb-[21px] rounded-[20px] shadow-shad1 overflow-hidden animate-fade-down group md:animate-fade-left md:pb-[23px] xl:animate-fade-down xl:pb-[31px]">
                            <div className="relative w-full pt-[48.09%] transition-all md:pt-[44.83%] xl:overflow-hidden xl:pt-[45.63%]">
                                <img className="absolute w-full h-full top-0 left-0 object-cover transition-all xl:group-hover:scale-125" src="../img/home/sec2-img3.png" alt=''/>
                            </div>
                            <div className="absolute w-full px-6 top-4 flex items-center justify-between">
                                <div className="text-white text-title-2 font-semibold xl:text-title-1">Thành phố Hạ Long</div>
                                <div className="flex gap-x-2">
                                    <div className="flex items-center justify-center bg-white/40 w-7 h-7 rounded-full">
                                        <i className="twi-22-heart-line text-[18px] leading-[13px] text-white"></i>
                                    </div>
                                    <div className="flex items-center justify-center bg-white/40 w-7 h-7 rounded-full">
                                        <img src="../img/home/external-link.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 px-6 md:pt-[14px] xl:pt-[22px]">
                                <div className="max-w-[74%]">
                                    <div className="flex items-center">
                                        <div className="w-[99px] line-through text-neutral-1-500 text-body-1 leading-[17px]">11,500,000đ</div>
                                        <div className="pl-2 text-header-2 text-secondary-1 font-semibold leading-[17px]">10,500,000đ</div>
                                    </div>
                                    <div className="py-4 text-caption-1 leading-[17px] font-semibold text-neutral-1-900 md:py-[18px] xl:text-[14px]">Mã tour: SGN185-005-180822VN-V</div>
                                    <div className="text-caption-1 text-neutral-1-600 leading-[17px]">Thời gian : 3 ngày 2 đêm</div>
                                </div>
                                <div className="w-[55px] h-[55px] py-[17px] px-[11px] rounded-full bg-white border-[3px] border-neutral-1-50  xl:w-[60px] xl:h-[60px]">
                                    <img className="" src="../img/header-footer/logo-blue.png" alt=''/>
                                </div>
                            </div>
                        </a>
                        <a href="chitiettour.html" className="relative pb-[21px] rounded-[20px] shadow-shad1 overflow-hidden animate-fade-down group md:animate-fade-right md:hidden xl:block xl:animate-fade-down xl:pb-[31px]">
                            <div className="relative w-full pt-[48.09%] transition-all md:pt-[44.83%] xl:overflow-hidden xl:pt-[45.63%]">
                                <img className="absolute w-full h-full top-0 left-0 object-cover xl:hidden" src="../img/home/sec2-img1.png" alt=''/>
                                <img className="hidden absolute w-full h-full top-0 left-0 object-cover transition-all xl:block xl:group-hover:scale-125" src="../img/home/sec2-img3.png" alt=''/>
                            </div>
                            <div className="absolute w-full px-6 top-4 flex items-center justify-between">
                                <div className="text-white text-title-2 font-semibold xl:text-title-1">Thành phố Hạ Long</div>
                                <div className="flex gap-x-2">
                                    <div className="flex items-center justify-center bg-white/40 w-7 h-7 rounded-full">
                                        <i className="twi-22-heart-line text-[18px] leading-[13px] text-white"></i>
                                    </div>
                                    <div className="flex items-center justify-center bg-white/40 w-7 h-7 rounded-full">
                                        <img src="../img/home/external-link.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 px-6 md:pt-[14px] xl:pt-[22px]">
                                <div className="max-w-[74%]">
                                    <div className="flex items-center">
                                        <div className="w-[99px] line-through text-neutral-1-500 text-body-1 leading-[17px]">11,500,000đ</div>
                                        <div className="pl-2 text-header-2 text-secondary-1 font-semibold leading-[17px]">10,500,000đ</div>
                                    </div>
                                    <div className="py-4 text-caption-1 leading-[17px] font-semibold text-neutral-1-900 md:py-[18px] xl:text-[14px]">Mã tour: SGN185-005-180822VN-V</div>
                                    <div className="text-caption-1 text-neutral-1-600 leading-[17px]">Thời gian : 3 ngày 2 đêm</div>
                                </div>
                                <div className="w-[55px] h-[55px] py-[17px] px-[11px] rounded-full bg-white border-[3px] border-neutral-1-50  xl:w-[60px] xl:h-[60px]">
                                        <img className="" src="../img/header-footer/logo-blue.png" alt=''/>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TourDetail
