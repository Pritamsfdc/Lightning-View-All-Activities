({
    createCalendar : function(component,eventData) {
        var events = eventData;
        var options = {
            tmpl_path: "/resource/mvc__CalendarLib/tmpls/",
            events_source:function () { return events; },
            view: 'month',
            tmpl_cache: false,
            views:              {
                year:  {
                    slide_events: 1,
                    enable:       1
                },
                month: {
                    slide_events: 1,
                    enable:       1
                },
                week:  {
                    enable: 1
                },
                day:   {
                    enable: 1
                }
            },
            onAfterEventsLoad: function(events) {
                if(!events) {
                    return;
                }
                var list = jQuery('#eventlist');
                list.html('');

            },
            onAfterEventListLoad: function() {
                jQuery('.sll_details').each(function() {
                    jQuery(this).click(function() {
                        var eId = jQuery(this).attr('data-event-id');
                        var subject = jQuery(this).children(".event-item").text();

                        //Event発火をやめて詳細ページに遷移する仕様に変更
                        //var selectEvent = $A.get("e.mvc:SelectEventMonthView");
                        //selectEvent.setParams({"id": eId , "subject":subject.trim() });
                        //selectEvent.fire();

                        var navEvt = $A.get("e.force:navigateToSObject");
                        navEvt.setParams({
                            "recordId": eId,
                            "slideDevName":"detail"
                        });
                        navEvt.fire();
                    });
                });
            },
            onAfterViewLoad: function(view) {
                jQuery('.page-header h3').text(this.getTitle());
                jQuery('.btn-group button').removeClass('tc-active');
                jQuery('button[data-calendar-view="' + view + '"]').addClass('tc-active');

                jQuery('.day-event-a').each(function() {
                    var eId = jQuery(this).children("a").attr('data-event-id');
                    jQuery(this).click(function() {
                        var navEvt = $A.get("e.force:navigateToSObject");
                        navEvt.setParams({
                            "recordId": eId,
                            "slideDevName":"detail"
                        });
                        navEvt.fire();
                    });
                });
                jQuery('.week-event-a').each(function() {
                    var eId = jQuery(this).children("a").attr('data-event-id');
                    jQuery(this).click(function() {
                        var navEvt = $A.get("e.force:navigateToSObject");
                        navEvt.setParams({
                            "recordId": eId,
                            "slideDevName":"detail"
                        });
                        navEvt.fire();
                    });
                });

            }
        };

        jQuery("#TC_calendar").empty();
        var calendar = jQuery("#TC_calendar").calendar(options);

        jQuery('.btn-group button[data-calendar-nav]').each(function() {
            var $this = jQuery(this);
            $this.click(function() {
                calendar.navigate($this.data('calendar-nav'));
            });
        });
        jQuery('.btn-group button[data-calendar-view]').each(function() {
            var $this = jQuery(this);
            $this.click(function() {
                calendar.view($this.data('calendar-view'));
            });
        });

        jQuery('#first_day').change(function(){
            var value = jQuery(this).val();
            value = value.length ? parseInt(value) : null;
            calendar.setOptions({first_day: value});
            calendar.view();
        });
        try{
            
            var mc = new Hammer(jQuery("#TC_calendar")[0]);
            mc.get('swipe').set({threshold:50 });
            mc.get('swipe').set({velocity:0.1 });
            mc.on("swipeleft", function(ev) { calendar.navigate('next'); });
            mc.on("swiperight", function(ev) { calendar.navigate('prev'); });
            
            var s = jQuery('.tc_title').text();
            if(s.length == 0){ jQuery('.tc-title-contaner').css('display','none'); }

        }catch (e) {console.log(" Please reload try this page.")}
    }
})