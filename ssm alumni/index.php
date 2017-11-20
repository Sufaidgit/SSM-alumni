
<html >
    <head>
        
        <title>SSM Poly Technic Collage Alumni</title>
        <meta charset="utf-8">
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>  
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->
		<!--------date picker------------->
    
        <!----------close date picker-.------>
        <link rel="stylesheet" href="build/css/intlTelInput.css">
<link rel="stylesheet" href="build/css/demo.css">
        <!----------css country code----------->
        	<link rel="stylesheet" href="build/css/countrySelect.css">
        <!--------close country code----------->
       
		<!-- all css here -->
		        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<!-- bootstrap v3.3.7 css -->
        <link rel="stylesheet" href="css/bootstrap.min.css">
		<!-- animate css -->
        <link rel="stylesheet" href="css/animate.css">
		<!-- owl.carousel.2.0.0-beta.2.4 css -->
        <link rel="stylesheet" href="css/owl.carousel.css">
		<!-- slicknav.min.css -->
        <link rel="stylesheet" href="css/slicknav.min.css">
		<!-- font-awesome v4.6.3 css -->
        <link rel="stylesheet" href="css/font-awesome.min.css">
		<!-- video-js.css -->
        <link rel="stylesheet" href="css/video-js.css">
		<!-- style css -->
		<link rel="stylesheet" href="css/style.css">
		<!-- responsive css -->
        <link rel="stylesheet" href="css/responsive.css">
		<!-- modernizr css -->
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
		<!-- header area start -->
		<header>
			<div class="header-top bg-1 ptb-20">
				<div class="container">
					<div class="row">
						<div class="col-md-6 col-sm-6 col-xs-12">
							<div class="header-top-left">
								<ul class="socil-icon">
									<li><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
									<li><a href="#"><i class="fa fa-instagram"></i></a></li>
								</ul>
							</div>
						</div>
						<div class="col-md-6 col-sm-6 col-xs-12">
							<div class="header-top-right text-right">
								<ul>
									<li><a href="#preview">Log in <i class="fa fa-user"></i></a></li>
									<li><a href="#details"><i class="fa fa-unlock-alt"></i> Register</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="header-bottom" id="sticky-header">
				<div class="container">
					<div class="row">
						<div class="col-md-4 col-sm-3 col-xs-8">
							<div class="logo">
								<a href="index.html">
									<img src="img/logo11.png" alt="" />
								</a>
							</div>
						</div>
						<div class="col-md-8 col-sm-9 hidden-xs">
							<div class="mainmenu text-right">
								<ul id="navigation">
									<li class="active"><a href="#home">Home</a>
									<li><a href="#news">News</a>
									<li><a href="#contact">Contact</a></li>
                                   
								</ul>
							</div>
						</div>
						<div class="col-xs-4 hidden-lg hidden-md hidden-sm">
							<div class="responsive-menu-wrap floatright">
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<!-- header area end -->
		
		<!-- slider-area start -->
		<div class="slider-area" id="home">
			<div class="slider-active">
				<div class="single-slider">
					<img src="img/slider/4.jpg" alt="" />
					<div class="slider-content">
						<div class="table">
							<div class="table-cell">
								<div class="container">
									<div class="row">
										<div class="col-md-8  col-xs-12">
											<h2>INSPIRATION INNOVATION AND DISCOVERY</h2>
                      <p>Global Gathering On Agust 2018</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="single-slider">
					<img src="img/slider/5.jpg" alt="" />
					<div class="slider-content">
						<div class="table">
							<div class="table-cell">
								<div class="container">
									<div class="row">
										<div class="col-md-8  col-xs-12">
											<h2>SSM calling .... Again!!!!!!</h2>
                       <p>Global Gathering On Agust 2018</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="single-slider">
					<img src="img/slider/6.jpg" alt="" />
					<div class="slider-content">
						<div class="table">
							<div class="table-cell">
								<div class="container">
									<div class="row">
										<div class="col-md-8 col-xs-12">
											<h2>All Are Welcome</h2>
                      <p>Global Gathering On Agust 2018</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- slider-area end -->
		<!-- slider-area end -->
		
		<div class="home2-course-area bg-2">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div class="home2-course-sidebar-area">
							<div class="course-sidebar-wrap">
								<div class="row">
									<div class="col-md-12 col-xs-12">
										<div class="course-sidebar-menu">
											<ul>
												<li class="active">
													<a href="#details" data-toggle="tab">NEW REGISTRATION</a>
												</li>
												<li><a href="#preview" data-toggle="tab">LOGIN</a></li>
											</ul>
										</div>
										
									</div>
									<div class="col-md-12 col-xs-12">
										<div class="tab-content">
											<div role="tabpanel" class="tab-pane active" id="details">
                                            <!--------------------start register--------------------->
											<form ng-app="myApp" ng-controller="validateCtrl" name="myForm" method="post" action="register.php">
												<div class="row">
													<div class="col-md-6">
														<div class="course-from">
														
																<ul>
                                                               
																	<li>
																		<label>NAME IN FULL AS IN DIPLOMA ROLL<span>*</span></label>
																		<input type="text" name="user" ng-model="user" ng-minlength="3" placeholder="ENTER NAME" required>
<span style="color:red" ng-show="myForm.user.$dirty && myForm.user.$invalid">
<span ng-show="myForm.user.$error.required">Name is required.</span>
<span class="msg" ng-show="myForm.user.$dirty && myForm.user.$error.minlength">Not a name</span>
</span>
																	</li>
                                                                    <li>
																		<label>DEPARTMENT / BRANCH OF STUDY<span> *</span></label>
																		<select name="department" ng-model="department" required>
																			<option selected value="">SELECT DEPARTMENT</option>
																			<option>Computer</option>
																			<option>Mechanical</option>
																			<option>Civil</option>
																			<option>Automobile</option>
                                                                            <option>Electrical</option>
                                                                            <option>Electronics</option>
																		</select>
                    <span style="color:red" ng-show="myForm.department.$dirty && myForm.department.$invalid">
<span ng-show="myForm.department.$error.required">Department is required.</span>
</span>
																	</li>
                                                                    <li>
																			<label>YEAR OF COMPLETION / PASS OUT (final year) <span>*</span></label>
																		<select name="year" ng-model="year" required>
																			<option selected value="">SELECT YEAR</option>
                                                                            <?php 
																			for ($i=1962;$i<=date('Y');$i++)
																			{
																			?>
																			<option><?php echo $i; ?></option>
																			<?php } ?>
																			
																		</select>
               <span style="color:red" ng-show="myForm.year.$dirty && myForm.year.$invalid">
<span ng-show="myForm.year.$error.required">Completed Year is required.</span>
</span>
																	</li>
                                                                    <li>
                                                                    <label>STREAM (REGULAR / EVENING)<span>*</span></label>
																		<select name="stream" ng-model="stream" required>
																			<option selected value="">SELECT STREAM</option>
																			<option>Regular</option>
																			<option>Evening</option>
																		</select>
               <span style="color:red" ng-show="myForm.stream.$dirty && myForm.stream.$invalid">
<span ng-show="myForm.stream.$error.required">Stream is required.</span>
</span>
                                                                    </li>
																	
                                                                    <li>
																		<label>MOBILE / CONTACT NUMBER (INDIA)<span>*</span></label>
																		<input type="number" name="contact" placeholder="CANDIDATE CONTACT" ng-model="contact" ng-minlength="10" ng-maxlength="10" required/>
                                                                        <span style="color:red" ng-show="myForm.contact.$dirty && myForm.contact.$invalid">
<span ng-show="myForm.contact.$error.required">Contact is required.</span>
 <span class="msg" ng-show="myForm.contact.$dirty && myForm.contact.$error.minlength">Not A Contact Number</span>
   <span class="msg" ng-show="myForm.contact.$dirty && myForm.contact.$error.maxlength">Not A Contact Number</span>
</span>
																	</li>
																	
																</ul>
															
														</div>
													</div>
                                                    <!----------------------------------->
                                                    <div class="col-md-6">
														<div class="course-from">
														
																<ul>
																	
                                                                    <li>
																		<label>EMAIL ADDRESS (IF ENY)<span>*</span></label>
																		<input type="email" name="email" ng-model="email" placeholder="example@gmail.com" required>
<span ng-show="myForm.email.$dirty && myForm.email.$invalid">
<span ng-show="myForm.email.$error.required">Email is required.</span>
<span ng-show="myForm.email.$error.email">Invalid email address.</span>
</span>
																	</li>
                                                                    <li>
																		<label>NATIVE DISTRICT <span>*</span></label>
																		<select name="city" ng-model="city" required>
																			<option selected value="">SELECT DISTRICT</option>
																			<option>Malappuram</option>
																			<option>Calicut</option>
																			<option>Palakkad</option>
																			<option>Thrichur</option>
																			<option>Ernakulam</option>
																			<option>Idukki</option>
																			<option>Kottayam</option>
																			<option>Wayanad</option>
																			<option>Kannur</option>
																			<option>Kasaragod</option>
																		</select>
                        <span ng-show="myForm.city.$dirty && myForm.city.$invalid">
<span ng-show="myForm.city.$error.required">Native District is required.</span>
</span>
																	</li>
                                                                     <li>
																		<label>COUNTRY OF EMPLOYMENT / PROFESSION (IF ENY) <span>*</span></label>
																	
      <input type="text"  id="country" name="country" ng-model="country" placeholder="SELECT / TYPE COUNTRY" required>
                                                                       
                                                                       
                        <span style="color:red" ng-show="myForm.country.$dirty && myForm.country.$invalid">
<span ng-show="myForm.country.$error.required">Country is required.</span>
</span>
																	</li>
                                                                     <li>
																		<label>MOBILE / CONTACT NUMBER WITH COUNTRY CODE(ABROAD)<span></span></label>
                                                                        <input type="tel" name="acontact" ng-model="acontact" ng-minlength="13" ng-maxlength="20" ng-pattern="/^[0-9]/" id="mobile-number" placeholder="e.g. +1 702 123 4567" style="padding-left:50px;">
                                                                        <span style="color:red" ng-show="myForm.acontact.$dirty && myForm.acontact.$invalid">
 <span class="msg" ng-show="myForm.acontact.$dirty && myForm.acontact.$error.minlength">Not A Contact Number</span>
   <span class="msg" ng-show="myForm.acontact.$dirty && myForm.acontact.$error.maxlength">Not A Contact Number</span>
   <span ng-show="myForm.acontact.$error.pattern">Not a valid number!</span>
</span>
																	</li>
                                                                    <li>
																		<label>WEBSITE OF PERSONAL BUSINESS (IF ENY) <span></span></label>
                                                                    <input type="url" name="url" ng-model="url.text" placeholder="http://google.com">
                                                        
       <span style="color:#F00" ng-show="myForm.url.$dirty && myForm.url.$invalid">
    <span class="error" ng-show="myForm.url.$error.url">
      Not valid url!</span>
</span>

																	</li>-
																</ul>
														</div>
													</div>
                                                    <!--------------------close start register--------------------->
													<div class="col-md-12">
														<div class="course-from">
															<div class="next-page text-center">
                                                            <br>
                                                            <ul>
                                                            <li>
                                                           <style>
														   button:disabled {cursor: not-allowed;}
															opacity:1.5; 
														   </style>
                                                         <button type="submit"
ng-disabled="myForm.user.$dirty && myForm.user.$invalid ||  
myForm.email.$dirty && myForm.email.$invalid ||  
myForm.city.$dirty && myForm.city.$invalid ||  
myForm.department.$dirty && myForm.department.$invalid ||  
myForm.year.$dirty && myForm.year.$invalid||  
myForm.contact.$dirty && myForm.contact.$invalid||  
myForm.stream.$dirty && myForm.stream.$invalid||  
myForm.country.$dirty && myForm.country.$invalid||  
myForm.acontact.$dirty && myForm.acontact.$invalid||  
myForm.url.$dirty && myForm.url.$invalid" 
style="width:90px"  name="rgister">Register</button>
 <button type="reset"  style="width:90px">Reset</button>
                                                            </li>
                                                            </ul>
															</div>
														</div>
													</div>
                                                    	</form>
												</div>
											</div>
											<div role="tabpanel" class="tab-pane" id="preview">
                                             <!--------------------start register--------------------->
												
												<form  method="post">
                                                <div class="row">
													<div class="col-md-12">
                                                    <div class="col-sm-3">
                                                    </div>
                                                    <div class="col-sm-6">
														<div class="course-from">
														
																<ul>
																	<li>
																		<label>USER NAME <span>*</span></label>
																		<input type="text" placeholder="USER NAME" required/>

																	</li>
                                                                    <li>
																		<label>PASSWORD <span>*</span></label>
																		<input type="password" placeholder="password" required/>
																	</li>
																	
																</ul>
															
														</div>
                                                        </div>
                                                       
                                                     <div class="col-sm-3">
                                                    </div>
													</div>
                                                    <!----------------------------------->
                                                   
                                                    <!--------------------close start register--------------------->
													<div class="col-md-12">
														<div class="course-from">
															<div class="next-page text-center">
                                                            <br>
                                                            <ul>
                                                            <li>
                                                                <input type="submit" value="LOGIN" style="width:100px">
                                                            </li>
                                                            </ul>
															</div>
														</div>
													</div>
                                                    	 </form>
										</div>
                                        </div>
									</div>
								</div>
							</div>
						</div>
						</div></div>
						<!-- latest news -->
						<div class="latest-news-wrap" id="news">
							<h2 class="news-title">LATEST NEWS</h2>
							<div class="latest-news">
								<div class="row">
									<div class="col-md-4 col-xs-12">
										<ul>
											<li>
												<span><i class="fa fa-clock-o"></i> December 15, 2017</span>
												<p> <a style="color:#FFF" href="" class="typewrite" data-period="2000" data-type='[ "The face of the moon was in shadow.so beautiful yet terrific." ]'></a></p>
											</li>
							
										</ul>
									</div>
									<div class="col-md-4 col-xs-12">
										<ul>
											<li>
												<span><i class="fa fa-clock-o"></i> December 15, 2017</span>
												<p> <a style="color:#FFF" href="" class="typewrite" data-period="2000" data-type='[ "The face of the moon was in shadow.so beautiful yet terrific." ]'></a></p>
											</li>
											
										</ul>
									</div>
									<div class="col-md-4 col-xs-12">
										<ul>
											<li>
												<span><i class="fa fa-clock-o"></i> December 15, 2017</span>
												<p> <a style="color:#FFF" href="" class="typewrite" data-period="2000" data-type='[ "The face of the moon was in shadow.so beautiful yet terrific." ]'></a></p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<!-- latest news -->
					</div>
				</div>
				<!----------------close--------------->
		
		<!-- contact-area start -->
		<div class="contact-area ptb-120 bg-2" id="contact">
			<div class="container">
             <h2 class="section-title">CONTACT INFO</h2>
				<div class="row">
					<div class="col-md-4 col-xs-12">
						<div class="contact-wrap">
							<p><b>Seethi Sahib Memorial Polytechnic College, Tirur, Thekkum Muri (po)</b></p>
							<p>Pin : 676105</p>
							<p>Contact : 4942421695</p>
			        <p>Fax : 24222234</p>
			        <p>E-mail : ssmpoly@sify.com</p>
			        <p>Web : ssmpoly.ac.in</p>
						</div>
					</div>
					<div class="col-md-8 col-xs-12">
						<div class="contact-form">
							<div class="cf-msg"></div>
							<form action="mail.php" method="post" id="cf">
								<div class="row">
									<div class="col-md-6 col-sm-6 col-xs-12">
										<input type="text" placeholder="Name" id="fname" name="fname">
									</div>
									<div class="col-md-6 col-sm-6 col-xs-12">
										<input type="text" placeholder="Email" id="email" name="email">
									</div>
									<div class="col-md-12 col-sm-12 col-xs-12">
										<input type="text" placeholder="Subject" id="subject" name="subject">
									</div>
									<div class="col-md-12 col-sm-12 col-xs-12">
										<textarea class="contact-textarea" placeholder="Message" id="msg" name="msg"></textarea>
									</div>
									<div class="col-md-12 col-sm-12 col-xs-12">
										<button id="submit" class="cont-submit btn-contact" name="submit">Submit A Message</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
               </div>
              </div>
           <div class="contact-area ptb-120 bg-2" id="find">
			<div class="container">
             <h2 class="section-title">FIND US</h2>
				<div class="row">
					<div class="col-xs-12">
                    <div class="img-responsive">
						
                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.8778867520837!2d75.92435731435167!3d10.896883992239832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b1bedc426ccd%3A0xac6c6e9498597bc3!2sSeethi+Sahib+Memorial+Polytechnic+College!5e0!3m2!1sen!2sin!4v1507353905909" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                        </div>
					</div>
				</div>
			</div>
		</div>
		<!-- contact-area close -->
		
		<!-- footer-area start -->
		<footer>
			<div class="footer-top ptb-120">
				<div class="container">
					<div class="row">
						<div class="col-md-9 col-sm-6 col-xs-12">
							<div class=" footer-widget">
								<!--<img src="img/f1.png" alt="" />-->
                               <h2>About SSM</h2>
								<p align="justify"><b> Seethi Sahib Memorial Polytechnic College</b>, established in 1962, is the First Polytechnic in Kerala State under Private Sector, is one of the renowned technical institution in India, offering 3 year Engineering Diploma courses in Six disciplines namely Civil, Mechanical, Electrical, Electronics, Automobile and Computer Engineering. under the Directorate of Technical Education, Government of Kerala.</p>
								<p align="justify">
								In recognition to the unique performance history and outstanding academic excellence, this institution has been selected by Govt. for implementing Canada India Institutional Co-operation Project (CIICP), A joint venture by Govt. of India and Canadian International Development Agency (CIDA). The Continuing Education Cell (CE Cell) established in 1992 as part of this project offers need based training Programmes to meet the skill and competency needs of Business, Industry and Community.</p>
								<p align="justify"> Govt. of Kerala has accorded sanction to conduct need based training programmes vide G.O.(M.S) No.192/92/H.Edn. dated 24-12-’92 under CIICP. Further more, the CE Cell is the approved sub centre of “Centre for Continuing Education – Kerala” established by Govt. of Kerala, Reg. No. CE/P-132/200</p>
								<div class="socil-icon">
									<ul>
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
										<li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
										<li><a href="#"><i class="fa fa-instagram"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-6 col-xs-12">
							<div class="footer-widget footer-menu">
								<h2>Links</h2>
								<ul>
									<li><a href="#">Home</a></li>
									<li><a href="#">About</a></li>
									<li><a href="#">News</a></li>
									<li><a href="#">Events</a></li>
									<li><a href="#">Contact</a></li>
									<li><a href="#">Find</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="footer-bottom">
				<div class="container">
					<div class="row">
						<div class="col-xs-12">
							<div class="copyright">
								&copy; COPYRIGHT univercity 2017. DESIGN BY <a href="#">company name</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<!-- footer-area end -->
		
		<!-- all js here -->
          <!----------------script for news      ------------------>
    <script>
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
</script>
    <!--------------------close news----------------------->
    <!---------------------image upload --------------------->
    <script>
  var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
  };
</script>
    <!---------------close image------------------------------->
    <!-----------------------------validation--------------->
    
		<!-- jquery latest version -->
        <script src="js/vendor/jquery-1.12.4.min.js"></script>
		<!-- bootstrap js -->
        <script src="js/bootstrap.min.js"></script>
		<!-- owl.carousel.2.0.0-beta.2.4 css -->
        <script src="js/owl.carousel.min.js"></script>
		<!-- wow js -->
        <script src="js/video.js"></script>
		<!-- jquery.slicknav.min.js -->
        <script src="js/jquery.slicknav.min.js"></script>
		<!-- jquery.waypoints.min.js -->
        <script src="js/jquery.waypoints.min.js"></script>
		<!-- counterup.main.js -->
        <script src="js/counterup.main.js"></script>
		<!-- wow js -->
        <script src="js/videojs-ie8.min.js"></script>
		<!-- wow js -->
        <script src="js/wow.min.js"></script>
		<!-- plugins js -->
        <script src="js/plugins.js"></script>
		<!-- main js -->
        <script src="js/main.js"></script>

<!---------script for validations--------->
<script>
var app = angular.module('myApp', []);
app.controller('validateCtrl', function($scope) {
});
</script>

<script>
var app = angular.module('myAppp', []);
app.controller('validateCtrll', function($scope) {
});
</script>


<!----------close script---------------->
<!-------date picker-------->

<script src="Jquery/jquery-ui-1.10.0.custom/jquery-ui-1.10.0.custom/js/jquery-1.9.0.js"></script>
<script src="Jquery/jquery-ui-1.10.0.custom/jquery-ui-1.10.0.custom/js/jquery-ui-1.10.0.custom.js"></script>
<link href="Jquery/jquery-ui-1.10.0.custom/jquery-ui-1.10.0.custom/css/cupertino/jquery-ui-1.10.0.custom.css" rel="stylesheet" />
<script>
$(function() {
    $( "#datepicker" ).datepicker({  maxDate: new Date() });
  });
</script>

<!-----close date picker--------->

<!------------country code---------------->
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<!---------close imp ---->
<script src="build/js/intlTelInput.js"></script> 
<script>
      $("#mobile-number").intlTelInput();
</script>
<!----------close country code--------->
<!--------COUNTRY SELECTOR -------->

		<script src="build/js/countrySelect.min.js"></script>
		<script>
			$("#country").countrySelect({
				defaultCountry: "in"
				//onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
				//preferredCountries: ['ca', 'gb', 'us']
			});
		</script>
        
<!----------CLOSE COUNTRY SEELECTOR------->
    </body>
</html>


